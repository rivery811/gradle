package com.wego.web.tourizm;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Component @AllArgsConstructor @NoArgsConstructor @Lazy
public class Tourizm {

	private String place, spot, tourizmInfo, heartCount, img;
}
