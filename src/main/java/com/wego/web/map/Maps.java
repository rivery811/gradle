package com.wego.web.map;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Lazy
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Maps {
	private String place,latitude;
	private List<Maps> placeList;
//	x 위도 / y 경도 , place, SPOT,LATITUDE
	public Maps(String place, String latitude) {
		this.place = place;
		this.latitude = latitude;
	}
}
