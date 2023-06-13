package polycomputer.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface UploadService {

//	File save(MultipartFile file, String folder);
	String save(MultipartFile file, String folder);

}
