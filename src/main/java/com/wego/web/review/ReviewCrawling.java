package com.wego.web.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Stream;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.proxy.Box;
import com.wego.web.proxy.Inventory;
import com.wego.web.proxy.Proxy;
@Component("reviewCrawler")
@Lazy
public class ReviewCrawling extends Proxy{
	@Autowired Inventory<HashMap<String,String>> inventory;
	@Autowired Box<String> box;
	@Autowired Review review;
	@Autowired ReviewProxy reviewProxy;
	@Autowired ReviewMapper reviewMapper;
	
	@Transactional
	public ArrayList<HashMap<String,String>> reviewCrawing(){
		//
		String url = "https://store.naver.com/accommodations/detail?entry=pbl&id=1382820761&matchSidRoomIds=3120404%2C3120405%2C3114205%2C3120407%2C3120961%2C3121051%2C3121055%2C3121057%2C3121061%2C3121062%2C3113848%2C3120409%2C3120410%2C3121159%2C3121064%2C3121096%2C3121099%2C3114064%2C3120401&query=%ED%95%98%EB%A3%A8%EA%B0%95%EC%95%84%EC%A7%80%EC%95%A0%EA%B2%AC%ED%8E%9C%EC%85%98&tab=fsasReview";
		inventory.clear();
		
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements title = rawData.select("div[class=tit] a");
			Elements content = rawData.select("div[class=txt ellp2]");
			Elements img = rawData.select("div[class=thumb]");
			
			HashMap<String, String> map = null;
			for(int i = 0; i<title.size();i++) {
				map = new HashMap<String, String>();
				map.put("title", title.get(i).text());
				map.put("content", content.get(i).text());
				map.put("img", img.get(i).select("img").attr("src"));
				review.setImg(img.get(i).select("img").attr("src"));
				review.setTitle(title.get(i).text());
				review.setContent(content.get(i).text());
				review.setUid(reviewProxy.makeUserid());
				review.setBoardtype("review");
				reviewMapper.insertReview(review);
							
				inventory.add(map);
			}

			
		
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return inventory.get();
	}
	
	

}
