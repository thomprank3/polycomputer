package polycomputer;

import javax.servlet.http.HttpServletRequest;

public class Util {
public static String  getSiteURL(HttpServletRequest request) {
	String siteURL = request.getRequestURI().toString();
	return siteURL.replace(request.getServletPath(),"");
			
	
}
}
