package com.wego.web.map;


import java.util.HashMap;

import org.springframework.stereotype.Repository;


@Repository
public interface MapMapper {
		
	public void createMap(HashMap<String,String> paramMap);
	public Maps selectMapsByPlace(String place);
	public void insertMap(Maps param);
}
