package polycomputer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import polycomputer.interceptor.GlobalInterceptor;


@Configuration
public class InterceptorConfig implements WebMvcConfigurer{
@Autowired
GlobalInterceptor globallnterceptor;
 
@Override
public void addInterceptors(InterceptorRegistry registry) {
	registry.addInterceptor(globallnterceptor)
	.addPathPatterns("/**")
	.excludePathPatterns("/rest/**","/admin/**","/assets/**");
}

	
}
