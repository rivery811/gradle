package com.wego.web.tourizm;

public enum SQL {
	CREATE_TOURIZM, DROP_TOURIZM, TRUNCATE_TOURIZM, INSERT_TOURIZM;
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_TOURIZM:
			result = "CREATE TABLE TOURIZM"
			+ "(PLACE VARCHAR(30) PRIMARY KEY,"
			+ "SPOT VARCHAR(30), "
			+ "TOURIZMINFO VARCHAR(30), "
			+ "IMG VARCHAR(500), "
			+ "HEARTCOUNT VARCHAR(30) NOT NULL)";
			break;
		
		case DROP_TOURIZM:	
			result = "drop table TOURIZM";
			break;

		case TRUNCATE_TOURIZM:
			result = "TRUNCATE TABLE TOURIZM";
			break;
		
		}
		return result;
	}  

}