package polycomputer.service.impl;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import polycomputer.service.UploadService;

@Service
public class UploadServiceImpl implements UploadService{
	@Autowired
	ServletContext application;

//	@Override
//	public File save(MultipartFile file, String folder) {
//		File dir = new File(application.getRealPath("/images/" + folder));
//		System.out.println("path: " + dir);
//		if (!dir.exists()) {
//			dir.mkdirs();
//		}
//		String s = System.currentTimeMillis() + file.getOriginalFilename();
//		String name = Integer.toHexString(s.hashCode()) + s.substring(s.lastIndexOf("."));
//		try {
//			File savedFile = new File(dir, name);
//			file.transferTo(savedFile);
//			System.out.println(savedFile.getAbsolutePath());
//			System.out.println(s);
//			System.out.println(name);
//			return savedFile;
//		} catch (Exception e) {
//			throw new RuntimeException(); 
//		}
//	}
		
	@Override
	public String save(MultipartFile file, String folder) {
		String s = System.currentTimeMillis() + file.getOriginalFilename();
		String name = Integer.toHexString(s.hashCode()) + s.substring(s.lastIndexOf("."));
		try {
			Path path = Paths.get(folder);
			if (!Files.exists(path)) {
				Files.createDirectories(path);
			}
			try (InputStream inputStream = file.getInputStream()) {
				Path filePath = path.resolve(name);

				Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
				System.out.println("=>" + filePath);
				
				return name;
			} catch (Exception e) {
				throw new IOException("Không thể lưu file ảnh" + name);
			}
		} catch (Exception e) {
			System.out.println("Lỗi: " + e.toString());
		}

		return "No Image";
	}
		
	
	
}