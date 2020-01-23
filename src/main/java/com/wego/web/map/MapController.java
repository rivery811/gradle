package com.wego.web.map;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static java.util.stream.Collectors.toMap;
import com.wego.web.util.Printer;

@RestController
@RequestMapping("/maps")
public class MapController {
		@Autowired MapMapper mapMapper;
		@Autowired Printer printer;
		@Autowired MapProxy mapProxy;
		
		@GetMapping("/map/create/")
		public Map<?,?> createMap(){
			HashMap<String,String> paramMap= new HashMap<>();
			paramMap.put("CREATE_MAP", SQL.CREATE_MAP.toString());
			printer.accept("테이블 생성쿼리"+paramMap.get("CREATE_MAP"));
			Consumer<HashMap<String,String>> p = r -> mapMapper.createMap(r);
			p.accept(paramMap);
			paramMap.clear();
			paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		
		
		@GetMapping("/insert/mapDB")
		public Map<?,?> insertMapDB(){
			printer.accept("컨트롤러 들어옴");
			HashMap<String, String> paramMap = new HashMap<>();
			mapProxy.insertMapDB();
			paramMap.clear();
	    	paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		
		
}
		
		

