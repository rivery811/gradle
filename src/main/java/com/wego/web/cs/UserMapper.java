package com.wego.web.cs;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
	public void insertUser(User user);
	public User selectByIdPw(User user);
	public int existId(String uid);
	public void createUser(HashMap<String, String>paramMap);
	public void dropUser(HashMap<String, String>paramMap);
	public void removeUser(User user);
	public void truncateUser(HashMap<String,String> paramMap);
}
