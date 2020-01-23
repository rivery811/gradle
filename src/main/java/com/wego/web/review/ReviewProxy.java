package com.wego.web.review;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wego.web.proxy.Inventory;

import lombok.Data;
@Data
@Component
public class ReviewProxy {
	
	@Autowired ReviewCrawling reviewCrawler;
	@Autowired ReviewMapper reviewMapper;
    public String makeUserid() {

      List<String> uidText = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o",
                 "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                 "0");
      Collections.shuffle(uidText);
      String uids="";
      for(int i = 0; i<5; i++) {
    	  uids+=uidText.get(i);
      }
      return uids;
  }
    private int totalCount,startRow,endRow ,
	pageCount,pageNum;
    private final int pageSize = 6;
    
    public void paging() {
    	totalCount =reviewMapper.countCommunity();
    	pageCount = (totalCount % pageSize !=0)?(totalCount /pageSize)+1 : totalCount / pageSize;
    	startRow = (pageNum < 1)? 0 : (pageNum-1)*pageSize;
    	endRow =(pageNum ==pageCount)?totalCount -1:startRow+pageSize-1;
    	System.out.println("pageSize"+pageSize);
    	System.out.println("startRow"+startRow);
    }
	

}
