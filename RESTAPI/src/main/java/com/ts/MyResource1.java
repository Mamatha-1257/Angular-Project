package com.ts;

import java.io.IOException;
import java.util.List;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.ws.rs.GET;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.media.multipart.BodyPart;

import com.dao.CompanyDaoH;
import com.dao.EmployeeDaoH;
import com.dao.EventsDaoH;
import com.dto.Address;
import com.dto.Company;
import com.dto.Employee;
import com.dto.Events;
import java.util.UUID;



@Path("myresource1")
public class MyResource1 {

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getIt() {
		return "Got it!";
	}
	@Path("registerCompany")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String daoTest() {

		Address address = new Address();
		address.setStreet("Bachupally");
		address.setArea("Nizampet");
		address.setCity("Hyderabad");
		address.setState("Telangana");

		Company company = new Company();
		company.setCompCode("TS3254");
		company.setCompName("Talent Sprint");
		company.setHrMail("dummy@TS.com");
		company.setWebsite("http//:xyz");
		company.setHrPassword("password");
		company.setMobile("1234567890");
		company.setAddress(address);

		CompanyDaoH companyDao = new CompanyDaoH();
		companyDao.companyRegister(company);



		Employee emp = new Employee();
		emp.setEmpId(101);
		emp.setEmpName("Pasha");
		emp.setCompanyCode("TS2345");
		emp.setEmpMail("pasha@1234.com");
		emp.setEmpPassword("password");
		emp.setMobile("1234567890");
		emp.setInterest1("AI");
		emp.setInterest2("ML");
		emp.setInterest3("JAVA");

		EmployeeDaoH empDao = new EmployeeDaoH();
		empDao.empRegister(emp);

		Events events = new Events();
		events.setEventId(101);
		events.setEventName("APPLIED DATA SCIENCE BOOT CAMP");
		events.setEventTag("WORKSHOP");
		events.setEventDomain("Data science");
		//events.setStartDate(2020-07-15);
		//events.setEndDate(2020-07-17);
		events.setAddress(address);
		events.setMobile("9876543210");
		events.setWinner("xxx");
		events.setRunner("xxx");

		EventsDaoH eventsDao = new EventsDaoH();
		eventsDao.eventsRegister(events);


		return "success";
	}
	/*@Path("mail")
		@GET
		@Produces(MediaType.TEXT_PLAIN)*/
	public static List<String> hello(List<String> mailList,Events event) throws MessagingException {
		System.out.println("in myresource1");
		Address venue = event.getAddress();
		MimeMultipart content = new MimeMultipart("related");
		//String cid = "image1";
		//String poster = "/home/adminpc/Desktop/RESTAPI/image/"+event.getPoster(); 
		String subject="CO@PRO - Connecting Professionals: " + event.getEventName();
		String body="<h1>Greetings from CoPro!!!</h1><h3>Hello Techi, Hope you are doing good.There is an event coming up mark-up your calender, refer below for further details, Hoping for your active participation</h3><h4>Name: "
		+ event.getEventName()+"</h4><h4>Topic: " + event.getEventDomain() +"</h4><h4>Category: "+event.getEventTag()+"</h4><h4>Website: " + event.getEventUrl()+"</h4><h4>Starts At :"
		+event.getStartDate()+"</h4><h4>Ends At :"+ event.getEndDate() +"</h4><h4>Registration Fee :"+ event.getregFee() +"</h4><h4>Venue: " + venue.getStreet() + ", " + venue.getArea() + ", " + venue.getCity() + ", " + venue.getState() +"</h4><h4>Contact us: "
		+ event.getMobile()+"</h4><img src=\"cid:image\"><h4>Regards</h4><h5>Co@Pro</h5>";
		
		List<String> result = null; 
		System.out.println(mailList);
		System.out.println(mailList.size());
			String host = "smtp.gmail.com";
			String from = "anusha15216@gmail.com";
			String pass = "rasikanna123";
			Properties props = System.getProperties();
			props.put("mail.smtp.starttls.enable", "true"); // added this line
			props.put("mail.smtp.host", host);
			props.put("mail.smtp.user", from);
			props.put("mail.smtp.password", pass);
			props.put("mail.smtp.port", "587");
			props.put("mail.smtp.auth", "true");
			List<String> to = mailList; // added this line
			Session session = Session.getDefaultInstance(props, null);
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(from));

			InternetAddress[] toAddress = new InternetAddress[to.size()];

			// To get the array of addresses

			for( int i=0; i < to.size(); i++ )
			{
				// changed from a while loop
				toAddress[i] = new InternetAddress(to.get(i));
			}

			for( int i=0; i < toAddress.length; i++)
			{
				// changed from a while loop
				message.addRecipient(Message.RecipientType.TO, toAddress[i]);
			}

			message.setSubject(subject);
			//message.setText(body);
			// This mail has 2 part, the BODY and the embedded image
	         MimeMultipart multipart = new MimeMultipart("related");

	         // first part (the html)
	         MimeBodyPart messageBodyPart = new MimeBodyPart();
	         //String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
	         messageBodyPart.setContent(body, "text/html");
	         // add it
	         multipart.addBodyPart(messageBodyPart);

	         // second part (the image)
	         // messageBodyPart = new MimeBodyPart();
	        //  DataSource fds = new FileDataSource("D:\\Co@ProWorkspace\\DEMO\\src\\assets\\img\\" + event.getPoster());

	       //  messageBodyPart.setDataHandler(new DataHandler(fds));
	       //  messageBodyPart.setHeader("Content-ID", "<image>");

	         // add image to the multipart
	        // multipart.addBodyPart(messageBodyPart);

	         // put everything together
	         message.setContent(multipart);
			//message.setContent(content);
			Transport transport = session.getTransport("smtp");

			transport.connect(host, from, pass);
			transport.sendMessage(message, message.getAllRecipients());

			transport.close();
			System.out.println("success");
			result.add("success");
		System.out.println(result);
		return result;
	}
	public static String paymentMail(String mail,Events event) throws MessagingException {
		System.out.println("in myresource1");
		Address venue = event.getAddress();
		MimeMultipart content = new MimeMultipart("related");
		//String cid = "image1";
		//String poster = "/home/adminpc/Desktop/RESTAPI/image/"+event.getPoster(); 
		String subject="CO@PRO - Connecting Professionals: " + event.getEventName();
		String body="<h1> Hello!! Thank you for regsitering for the event, your payment is successful and this mail is to confirm your registration </h1>" +
		"<!DOCTYPE html> <html><head><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"><style>.card {box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);max-width: 800px;margin: auto;text-align: center;font-family: arial;}button {border: none;outline: 0;display: inline-block;padding: 8px;color: white;background-color: #000;text-align: center;cursor: pointer;width: 100%;font-size: 18px;}a {text-decoration: none;font-size: 22px;}button:hover,a:hover {opacity: 0.7;}</style></head><body style=\"background-color:#f8f6d7; height:800px\"><br><br><b><h1 style=\"text-align:center\">Event Details</h1></b><div class=\"card\"><img src=\"cid:image\" alt=\"poster\" style=\"width:100%\"> " + 
"<h1>" + event.getEventName() + "</h1>" + 
"<h3>Event Type : " + event.getEventTag()  + "</h3>" +
"<h3>Event Domain : " + event.getEventDomain() + "</h3>" + 
"<h3>Contact Number : " + event.getMobile() + "</h3>" + 
"<h3>Registration Fee : " + event.getregFee() + "</h3>" +
"<h3>Start Date : " + event.getStartDate()  + "</h3>" + 
"<h3>End Date : " + event.getEndDate() + "</h3>" + 
"<h3>Description : "+ event.getDetails() + "</h3>" + 
"<h3>Event URL : " + event.getEventUrl() + "</h3>" + 
"<h3>Venue: " + venue.getStreet() + ", " + venue.getArea() + ", " + venue.getCity() + ", " + venue.getState() +"</h3>" + 
"</div></body></html>" + 
"Thank you for using CO@PRO. We are looking forward for your participation in the event!!" + 
"<h3>" + "Regards" + "</h3>" +
"<h4>" + "CO@PRO" + "</h4>";
		
		String result = null; 
		System.out.println(mail);
		
			String host = "smtp.gmail.com";
			String from = "anusha15216@gmail.com";
			String pass = "rasikanna123";
			Properties props = System.getProperties();
			props.put("mail.smtp.starttls.enable", "true"); // added this line
			props.put("mail.smtp.host", host);
			props.put("mail.smtp.user", from);
			props.put("mail.smtp.password", pass);
			props.put("mail.smtp.port", "587");
			props.put("mail.smtp.auth", "true");
			String[] to = {mail}; // added this line
			Session session = Session.getDefaultInstance(props, null);
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(from));

			InternetAddress[] toAddress = new InternetAddress[to.length];

			// To get the array of addresses

			for( int i=0; i < to.length; i++ )
			{
			// changed from a while loop
			toAddress[i] = new InternetAddress(to[i]);
			}

			for( int i=0; i < toAddress.length; i++)
			{
			// changed from a while loop
			message.addRecipient(Message.RecipientType.TO, toAddress[i]);
			}


			message.setSubject(subject);
			// This mail has 2 part, the BODY and the embedded image
	         MimeMultipart multipart = new MimeMultipart("related");

	         // first part (the html)
	         MimeBodyPart messageBodyPart = new MimeBodyPart();
	         messageBodyPart.setContent(body, "text/html");
	         // add it
	         multipart.addBodyPart(messageBodyPart);

	         // second part (the image)
	        //  messageBodyPart = new MimeBodyPart();
	        //  DataSource fds = new FileDataSource(" /Desktop/angular-project/copro/src/assets/img/" + event.getPoster());
	         
	      // messageBodyPart.setDataHandler(new DataHandler(fds));
	       //  messageBodyPart.setHeader("Content-ID", "<image>");
	         // add image to the multipart
	        //multipart.addBodyPart(messageBodyPart);

	         // put everything together
	         message.setContent(multipart);
	         System.out.println(message);
	         
			Transport transport = session.getTransport("smtp");

			transport.connect(host, from, pass);
			transport.sendMessage(message, message.getAllRecipients());

			transport.close();
			System.out.println("success");
		System.out.println(result);
		return result;
	}
}
