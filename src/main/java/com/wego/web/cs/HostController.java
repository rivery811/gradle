package com.wego.web.cs;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.util.Printer;

@RestController
@RequestMapping("/host")
public class HostController {
	private static final Logger logger = LoggerFactory.getLogger(HostController.class);
	@Autowired Map<String, Object>map;
	@Autowired Host host;
	@Autowired Printer printer;
	@Autowired HostMapper hostMapper;
	@Autowired CsProxy csproxy;
	
	
	@GetMapping("/create/table")
    public Map<?,?> createHost(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	System.out.println("11111");
    	paramMap.put("CREATE_HOST", HostSQL.CREATE_HOST.toString());
    	System.out.println("왔니"+HostSQL.CREATE_HOST.toString());
    	Consumer<HashMap<String,String>> c = t-> hostMapper.createHost(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
	
	@PostMapping("/")
	public Map<?, ?> join(@RequestBody Host param){
		printer.accept("조인에들어옴");
		Consumer<Host> c = t -> hostMapper.insertHost(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/{hid}")
	public Map<?,?> login (@PathVariable String hid, @RequestBody Host param) {
		printer.accept("로그이니이이니인 아이디 : "+hid);
		Function<Host, Host>f = t -> hostMapper.selectByIdPw(param);
		map.clear();
		map.put("msg", "SUCCESS");
		map.put("host",f.apply(param));
		return map;
	}
	
	@GetMapping("/{hid}")
	public Host selectByIdpwd(@PathVariable String hid, @RequestBody Host param) {
		Function<Host, Host>f = t->hostMapper.selectByIdPw(param);
		return f.apply(param);
	}
	
	@GetMapping("/{hid}/existId")
	public Map<?, ?> existId(@PathVariable String hid ){
		printer.accept("exist 들어옴"+hid);
		Function<String,Integer> p = o -> hostMapper.existId(hid);
		map.clear();
		map.put("msg", (p.apply(hid)==0)? "SUCCESS":"FAIL");
		return map;
	}
	@DeleteMapping("/{hid}/remove")
	   public Map<?,?> removeHost(@PathVariable String hid, @RequestBody Host param) {
	      Consumer<Host> c = o->hostMapper.removeHost(param);
	      c.accept(param);
	      printer.accept("삭제컨트롤러");
	      map.clear();
	      map.put("msg", "SUCCESS");
	      return map;
	   }
	
	@PostMapping("/fileupload")
	public void fileupload(MultipartFile[]uploadFile) {
		csproxy.fileupload(uploadFile);
	}
	
}
