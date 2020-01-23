package com.wego.web.review;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ReviewMapper {
	public void createReview(HashMap<String, String> paramMap);
	public void createLike(HashMap<String, String> paramMap);
	public void createComment(HashMap<String, String> paramMap);
	public void createImg(HashMap<String, String> paramMap);
	public void dropReview(HashMap<String, String> paramMap);
	public void truncateReview(HashMap<String, String> paramMap);
	public void insertReview(Review r);
	public List<Review> reviewlist(ReviewProxy pxy);
	public List<Review> allreviewlist();
	public int countCommunity();
	public void insertComment(Comment c);
	public List<Comment> getcomment(int artseq);
	public String selectbyuid(Review r);
	public void insertIMG(IMG i);
	public List<IMG> getimg(int artseq);
	public Like getLike(Like l);
	public void insertLike(Like l);
	public void updatelikecnt(Review r);
	public void updatelikecheck(Like l);
	public int likecount(String artseq);
	public String liked(Like l);


}
