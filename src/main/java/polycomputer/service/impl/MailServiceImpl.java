package polycomputer.service.impl;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import polycomputer.entity.MailInfor;
import polycomputer.service.MailService;


@Service
public class MailServiceImpl implements MailService{

	@Autowired
	JavaMailSender sender;

	
	@Override
	public void send(MailInfor mail) throws MessagingException {
		// Tạo message
		MimeMessage message = sender.createMimeMessage();
		// Sử dụng Helper để thiết lập các thông tin cần thiết cho message
		MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
		helper.setFrom(mail.getFrom());
		helper.setTo(mail.getTo());
	
		 helper.setSubject( mail.getSubject()); 
	
        
		helper.setText(  mail.getBody(), true);
		helper.setReplyTo(mail.getFrom());
		String[] cc = mail.getCc();
		if(cc != null && cc.length > 0) {
			helper.setCc(cc);
		}
		String[] bcc = mail.getBcc();
		if(bcc != null && bcc.length > 0) {
		helper.setBcc(bcc);
		}
		String[] attachments = mail.getAttachments();
		if(attachments != null && attachments.length > 0) {
		for(String path: attachments) {
		File file = new File(path);
		helper.addAttachment(file.getName(), file);
		}
		}
		// Gửi message đến SMT
		}
	
	
	
	@Override
	public void send(String to, String subject, String body)
	throws MessagingException {
	this.send(new MailInfor(to, subject, body));
	}
	@Override
	public void queue(MailInfor mail) {
	list.add(mail);
	}
	
	
	@Override
	public void queue(String to, String subject, String body) {
	queue(new MailInfor(to, subject, body));
	}
	
	@Override
	@Scheduled(fixedDelay = 5000)
	public void run() {
	while(!list.isEmpty()) {
	MailInfor mail = list.remove(0);
	try {
	this.send(mail);
	} catch (Exception e) {
	e.printStackTrace();
	}
	}
	}
	}

