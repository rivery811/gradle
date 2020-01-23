package com.wego.web.cs;

public enum UserSQL {
	CREATE_USER,DROP_USER,TRUNCATE_USER,UPLOAD_PATH;
	@Override
	public String toString() {
		String result = "";
		
		switch (this) {
		case CREATE_USER:
			result = "CREATE TABLE USER"
					+ "(uid VARCHAR(30) PRIMARY KEY,"
					+ "pwd VARCHAR(30) ,"
					+ "uname VARCHAR(30) ,"
					+ "nickname VARCHAR(30) ,"
					+ "birth VARCHAR(30) ,"
					+ "tel VARCHAR(30) ,"
					+ "pettype VARCHAR(30))";
			break;
		case DROP_USER :
			result = "drop table USER";
			break;
		case TRUNCATE_USER :
			result = "TRUNCATE TABLE COMMU";
			result = "CREATE TABLE ITEM()";
			break;
		case UPLOAD_PATH :
			result = "C:\\Users\\user\\hamusePRJ\\wegoPRJ\\src\\main\\webapp\\resources\\wegoimg\\";
			break;	
		default:
			break;
		}
		return result;
	}
	
	
	
}
