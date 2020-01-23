package com.wego.web.tourizm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wego.web.proxy.Inventory;
import com.wego.web.util.Printer;

@RestController

@RequestMapping("/tourizm")
public class TourizmController {
	@Autowired TourizmMapper tourizmMapper;
	@Autowired Inventory<Tourizm[]> inventory;
	@Autowired Printer printer;
	@Autowired TourizmProxy tourizmProxy;
	@Autowired Tourizm tourizm;
	
	@GetMapping("/create/table")
	public Map<?, ?> createTourizm() {
		HashMap<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("CREATE_TOURIZM", SQL.CREATE_TOURIZM.toString());
		printer.accept("테이블 생성 쿼리 :" + paramMap.get("CREATE_TOURIZM"));
		
		Consumer<HashMap<String, String>> c = t -> tourizmMapper.createTourizm(t);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/insert/dummy")
	public Map<?, ?> insertTourizm() {
		HashMap<String, String> paramMap = new HashMap<String, String>();
		tourizmProxy.insertTourizm();
		return paramMap;
	}
	

	@GetMapping("/list")
	public Map<?, ?> list() {
		System.out.println("리스트 컨트롤러");
		HashMap<String, List<Tourizm>> map = new HashMap<>();
		map.put("list", tourizmMapper.tourizmList(tourizmProxy));
		System.out.println(map.get("list"));
		return map;
	}
}
