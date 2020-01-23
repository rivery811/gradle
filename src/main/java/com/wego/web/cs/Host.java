package com.wego.web.cs;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@Lazy
@NoArgsConstructor
public class Host {
	private String hid,pwd,hname,ceoname,companytype,tel,addr,
					licensenum,hostinfo;
}
