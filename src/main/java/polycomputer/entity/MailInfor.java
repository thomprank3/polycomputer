package polycomputer.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public class MailInfor {
	String from;
	String to  ;
	String[] cc;
	String[] bcc;
	String subject;
	String body;
	String[] attachments;
	public MailInfor(String to, String subject, String body) {
	this.from = "Poly's Computer <nantran481@gmail.com>";
	this.to = to;
	this.subject = subject;
	this.body = body;
	}
	}

