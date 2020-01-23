package com.wego.web.map;

public enum SQL {
		CREATE_MAP , DROP_MAP , SElECT_PLACE;
		
		@Override
		public String toString() {
			String result = "";
			
			switch(this){
				
				case CREATE_MAP:
					result="CREATE TABLE MAP"
					+"(PLACE VARCHAR(30) PRIMARY KEY,"
					+"LATITUDE VARCHAR(100))";
					break;
				case DROP_MAP:
					result="DROP TABLE MAP";
					break;
					
					
			}
			return result;
			
		}
}
