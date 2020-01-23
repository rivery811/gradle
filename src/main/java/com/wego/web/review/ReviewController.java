package com.wego.web.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.proxy.Inventory;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired ReviewMapper reviewMapper;
	@Autowired ReviewCrawling reviewCrawler;
	@Autowired Inventory<Review[]> inventory;
	@Autowired ReviewProxy reviewProxy;
	@Autowired FileProxy fileProxy;	
	@Autowired Comment comment;
	@Autowired Review review;
	@Autowired IMG img;
	@Autowired Like like;
	
    @GetMapping("/create/table")
    public Map<?,?> createReview(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_REVIEW", SQL.CREATE_REVIEW.toString());
    	Consumer<HashMap<String,String>> c = t-> reviewMapper.createReview(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
    @GetMapping("/create/tablelike")
    public Map<?,?> createLiketo(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_REVIEW", SQL.CREATE_LIKE.toString());
    	Consumer<HashMap<String,String>> c = t-> reviewMapper.createReview(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
    @GetMapping("/create/tablecomment")
    public Map<?,?> createComment(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_REVIEW", SQL.CREATE_COMMENT.toString());
    	Consumer<HashMap<String,String>> c = t-> reviewMapper.createReview(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
    @GetMapping("/create/tableimg")
    public Map<?,?> createIMG(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_REVIEW", SQL.CREATE_IMG.toString());
    	Consumer<HashMap<String,String>> c = t-> reviewMapper.createReview(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
    
	@GetMapping("/crawler")
	public ArrayList<HashMap<String,String>> db()  {

		return reviewCrawler.reviewCrawing();	

	}
	
	@GetMapping("/list/{pageNo}")
	public Map<?,?>list(@PathVariable int pageNo){
		System.out.println("리스트 컨트롤러");
		HashMap<String,List<Review>> map = new HashMap<>();
		reviewProxy.setPageNum(pageNo);
		reviewProxy.paging();
		map.put("review", reviewMapper.reviewlist(reviewProxy));
		return map;
	}
	
	@GetMapping("/comment/{artseq}")
	public Map<?,?>comment(@PathVariable int artseq){
		System.out.println("코멘트 읽기 컨트롤러");
		HashMap<String,List<Comment>> map = new HashMap<>();		
		map.put("comment", reviewMapper.getcomment(artseq));
		return map;
	}
	
	@GetMapping("/img/{artseq}")
	public Map<?,?>img(@PathVariable int artseq){
		System.out.println("이미지컨트롤러");
		HashMap<String,List<IMG>> map = new HashMap<>();
		img.setArtseq(String.valueOf(artseq));	
		map.put("img", reviewMapper.getimg(artseq));
		return map;
	}
	

	@GetMapping("/like/{artseq}/{uid}")
	public Map<?,?>like(@PathVariable String artseq,@PathVariable String uid){

		HashMap<String,Integer> map = new HashMap<>();
		like.setArtseq(artseq);
		like.setUid(uid);
		review.setArtseq(artseq);
		

		if(reviewMapper.getLike(like)==null) {
			System.out.println("처음좋아요");
			like.setLikecheck("1");
			review.setLikecnt(reviewMapper.likecount(artseq)+1);
			reviewMapper.insertLike(like);	
			reviewMapper.updatelikecnt(review);
		}else if(reviewMapper.getLike(like).getLikecheck().equals("0")) {
			System.out.println("좋아요누르기");
			like.setLikecheck("1");
			review.setLikecnt(reviewMapper.likecount(artseq)+1);
			reviewMapper.updatelikecheck(like);
			reviewMapper.updatelikecnt(review);
		}else if(reviewMapper.getLike(like).getLikecheck().equals("1")) {
			System.out.println("좋아요취소");
			like.setLikecheck("0");
			review.setLikecnt(reviewMapper.likecount(artseq)-1);
			reviewMapper.updatelikecheck(like);
			reviewMapper.updatelikecnt(review);
		}
		
		map.put("count", reviewMapper.likecount(artseq));
		return map;
	}
	
	@GetMapping("/likeimg/{artseq}/{uid}")
	public Map<?,?>likeimg(@PathVariable String artseq,@PathVariable String uid){
		System.out.println("이미지컨트롤러");
		HashMap<String,String> map = new HashMap<>();
		like.setArtseq(artseq);
		like.setUid(uid);
		map.put("likecheck", reviewMapper.liked(like));
		return map;
	}

	@GetMapping("/search/{searchword}")
	public Review[] search(@PathVariable String searchword){	
		return reviewMapper.allreviewlist().stream()
				.filter(t->t.getTitle().contains(searchword)||t.getContent().contains(searchword)).toArray(Review[]::new);
	}
	
	@PostMapping("/write")
	public Map<?,?> write(@RequestBody Review param){
		HashMap<String,String> map = new HashMap<>();
		Consumer<Review> c = s->reviewMapper.insertReview(param);
		c.accept(param);	
		return map;
	}
	
	@PostMapping("/fileupload/{uid}")
    public void fileupload(MultipartFile [] uploadFile,@PathVariable String uid) {
		System.out.println("파일 업로드");
		fileProxy.fileupload(uploadFile);
		review.setUid(uid);
		img.setArtseq(reviewMapper.selectbyuid(review));
		img.setUid(uid);
		img.setTitle(uploadFile.toString());
		reviewMapper.insertIMG(img);		
    }
	
	
	@PostMapping("/{seq}/comment")
	public Map<?,?> comment(@RequestBody Comment param,@PathVariable String seq){
		HashMap<String,String> map = new HashMap<>();
		System.out.println("코멘트 컨트롤러"+seq);
		Consumer<Comment> c = s->reviewMapper.insertComment(param);
		c.accept(param);;
		map.put("comment", param.getComments());
		return map;
	
	}

}
