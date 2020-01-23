package com.wego.web.tourizm;

import java.util.HashMap;
import java.util.List;

import com.wego.web.proxy.Proxy;

public interface TourizmMapper {

	public void insertTourizm(Tourizm param);
	public int countHeart();
	
	public void createTourizm(HashMap<String, String> paramMap);
	public void dropTourizm(HashMap<String, String> paramMap);
	public void truncateTourizm(HashMap<String, String> paramMap);
	public List<Tourizm> tourizmList(TourizmProxy pxy);
	public int countTourizmList();
	
}
