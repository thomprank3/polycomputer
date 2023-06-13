package polycomputer.service;

import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;


import polycomputer.entity.MailInfor;


public interface MailService {

	void run();

	void queue(String to, String subject, String body);

	void queue(MailInfor mail);

	void send(String to, String subject, String body) throws MessagingException;

	void send(MailInfor mail) throws MessagingException;

	List<MailInfor> list = new ArrayList<>();





}
