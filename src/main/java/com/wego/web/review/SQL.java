package com.wego.web.review;

public enum SQL {
	CREATE_REVIEW,DROP_REVIEW, TRUNCATE_REVIEW,CREATE_LIKE,CREATE_COMMENT,CREATE_IMG;
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_REVIEW:
			result = "CREATE TABLE COMMUNITY"
					+ "(ARTSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "UID VARCHAR(20),"
					+ "IMG VARCHAR(500),  "
					+ "BOARDTYPE VARCHAR(50), "
					+ "TITLE VARCHAR(100),"
					+ "CONTENT VARCHAR(500),"
					+ "LIKECNT INT(20))";
			break;
		case CREATE_LIKE:
			result = "CREATE TABLE LIKETO(LIKENO INT(10) 	PRIMARY KEY  AUTO_INCREMENT,"
					+ "ARTSEQ INT(10) NOT NULL ,	"
					+ "UID VARCHAR(30) unique key, "
					+ "likecheck VARCHAR(10),"
					+ "FOREIGN KEY (ARTSEQ) REFERENCES COMMUNITY(ARTSEQ),"
					+ "FOREIGN KEY (UID) REFERENCES USER(UID))";
			break;
		case CREATE_COMMENT:
			result = "CREATE TABLE COMMENT"
					+ "(COMMENTNO INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "COMMENTS VARCHAR(500) , "
					+ "UID VARCHAR(20),  "
					+ "ARTSEQ INT(10),  "
					+ "BOARDTYPE VARCHAR(50))";
			break;
		case CREATE_IMG:
			result = "CREATE TABLE COMMUIMG"
					+ "(IMGNO INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "TITLE VARCHAR(500) , "
					+ "UID VARCHAR(20),  "
					+ "ARTSEQ INT(10))";
			break;
		case DROP_REVIEW:
			result = "drop table REVIEW";
			break;

		case TRUNCATE_REVIEW:
			result = "TRUNCATE TABLE REVIEW";
			break;
		default:
			break;
		}
		return result;
	}  

}
