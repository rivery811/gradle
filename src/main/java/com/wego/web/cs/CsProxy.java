package com.wego.web.cs;

import java.io.File;
import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class CsProxy  {
	public void fileupload(MultipartFile[] uploadFile) {
        String uploadFolder = "C:\\Users\\user\\workspace\\vueworkspace\\csimg\\";
        File uploadPath = new File(uploadFolder);
        if(uploadPath.exists() ==false) {
        	uploadPath.mkdirs();
        }
        for(MultipartFile f : uploadFile) {
            String fname = f.getOriginalFilename();
            String extension = fname.substring(fname.lastIndexOf(".")+1);
            fname = fname.substring(fname.lastIndexOf("\\")+1,fname.lastIndexOf("."));
            UUID uuid = UUID.randomUUID();
            fname = fname+"-"+uuid.toString()+"."+extension;
            File saveFile = new File(uploadPath,fname);
            try {
                f.transferTo(saveFile);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
	}

}
