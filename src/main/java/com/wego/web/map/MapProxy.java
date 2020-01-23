package com.wego.web.map;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;


import com.wego.web.map.Maps;

import lombok.Data;

@Data
@Component
public class MapProxy {
	@Autowired MapMapper mapMapper;
	
	public List<String> placeList() {
		List<String> place = Arrays.asList("테헤란로","선릉과정릉","포스코미술관",
				"카페거리","코엑스아쿠아리움");
		
		return place;
	}
	public List<String> latitudeList() {
		List<String> latitude = Arrays.asList("127.050147/37.5048086","127.049405/37.5071363","127.056133/37.5057728",
				"127.027597/37.5001153","127.058796/37.5125020");
		
		return latitude;
	}
	 public List<Maps> mapDB() {
		 Maps maps= null;
		 List<Maps> mapList = new ArrayList<>();
		 for(int i = 0 ; i<placeList().size();i++) {
			 maps = new Maps(placeList().get(i), latitudeList().get(i));
			 mapList.add(maps);
			
		 }
		 
	  return mapList;
	 }
		
		@Transactional
		public void insertMapDB() {
			 List<Maps> mList = mapDB();
			for(int i=0;i<mList.size();i++) {
				mapMapper.insertMap(mList.get(i));
			}
		
		}
	 
	
}
