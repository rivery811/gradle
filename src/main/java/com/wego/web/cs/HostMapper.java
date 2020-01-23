package com.wego.web.cs;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface HostMapper {
	public void insertHost(Host host);
	public Host selectByIdPw(Host host);
	public int existId(String hid);
	public void createHost(HashMap<String, String>paramMap);
	public void dropHost(HashMap<String, String>paramMap);
	public void removeHost(Host host);
}
