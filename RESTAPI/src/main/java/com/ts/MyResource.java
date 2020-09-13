package com.ts;

import java.io.BufferedReader;
import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.SplittableRandom;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import javax.mail.MessagingException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.dao.CompanyDaoH;
import com.dao.EmployeeDaoH;
import com.dao.EventsDaoH;
import com.db.HibernateTemplate;
import com.dto.Address;
import com.dto.CCUtils;
import com.dto.Company;
import com.dto.Employee;
import com.dto.Employee_events;
import com.dto.Events;
import com.dto.Feedback;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.cj.Session;
import com.ts.MyResource1;

@Path("myresource")
public class MyResource {	

	@Path("Hello")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getHello() {
		return "Hello ! Welcome to REST API";
	}

	@Path("Hi")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getHi(){
		return "Hi! Welcome to REST API";
	}

	@Path("registerCompany")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void registerCompany(Company company) {
		System.out.println("Registered sucessfully : " + company);
		CompanyDaoH companyDaoH = new CompanyDaoH();
		companyDaoH.companyRegister(company);
		SMSSending(company.getCompCode(), company.getMobile());
	}
	public void SMSSending(String compCode, String mobile ) {
		Twilio.init("AC9582bc925f96aff530e1d088aa22394b", "40a8b4283085d45131901506b03d6b1b");
		Message message = Message
				.creator(new PhoneNumber("+91"+mobile), // to
						new PhoneNumber("+14124447407"), // from
						"Hello, Welcome to Copro!, This is your company code - " + compCode)
				.create();

		System.out.println(message.getSid());
	}

	@Path("loginCompany/{hrMail}/{password}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	public Company loginCompany(@PathParam("hrMail")  String hrMail, @PathParam("password")  String password) {
		CompanyDaoH companyDaoH = new CompanyDaoH();
		if (companyDaoH.companyLogin(hrMail, password) != null) {
			System.out.println("sucessfull login");
		}
		else{
			System.out.println("Invalid credentials");
		}
		return companyDaoH.companyLogin(hrMail, password);

	}

	@Path("loginEmployee/{empMail}/{empPassword}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	public Employee loginEmployee(@PathParam("empMail")  String empMail, @PathParam("empPassword")  String empPassword) {
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		if (empDaoH.empLogin(empMail, empPassword) != null) {
			System.out.println("sucessfull login");
		}
		else{
			System.out.println("Invalid credentials");
		}
		return empDaoH.empLogin(empMail, empPassword);

	}
	@Path("registerEmployee")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void registerEmployee(Employee emp) {
		System.out.println("Registered sucessfully : " + emp);
		EmployeeDaoH EmployeeDaoH = new EmployeeDaoH();
		EmployeeDaoH.empRegister(emp);

	}@Path("employeesForEvent")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void employeesForEvent(Employee_events emp_events) {
		System.out.println("Registered sucessfully : " + emp_events);
		EmployeeDaoH EmployeeDaoH = new EmployeeDaoH();
		EmployeeDaoH.employeesForEvent(emp_events);
		}
	
	
	@Path("getAllEmployees/{compCode}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Employee> getEmployeeAll(@PathParam("compCode")  String compCode){
		System.out.println("Recieved in getAllEmployees : " ); 
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		List<Employee> empList = empDaoH.getAllEmployees(compCode);
		return empList;	
	}
	
	@Path("getCmpEvents/{compCode}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Events> getCmpEvents(@PathParam("compCode")  String compCode){
		System.out.println("Recieved in getCmpEvents : " ); 
		EventsDaoH eventsDaoH = new EventsDaoH();
		List<Events> eventList = eventsDaoH.getCmpEvents(compCode);
		return eventList;	
	}
	
	@Path("getEmpEvents/{empId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Events> getEmpEvents(@PathParam("empId")  Integer empId){
		System.out.println("Recieved in getEmpEvents : " ); 
		EventsDaoH eventsDaoH = new EventsDaoH();
		List<Integer> eventIdList = eventsDaoH.getEmpEvents(empId);
		List<Events> evntlist = new ArrayList();
		for (int e:  eventIdList){
			Events events = eventsDaoH.getEvents(e);
			evntlist.add(events);
		}
		return evntlist;	
	}
	
	@Path("getEmployeeByEvents/{selectedEventId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Employee_events> getEmployeeByEvents(@PathParam("selectedEventId") int selectedEventId){
		System.out.println("Recieved in getCmpEvents : " ); 
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		List<Employee_events> empList = empDaoH.getEmployeeByEvents(selectedEventId);
		return empList;	
	}
	
	@Path("getEmployeeFeedback/{selectedEventId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Feedback> getEmployeeFeedback(@PathParam("selectedEventId") int selectedEventId){
		System.out.println("Recieved in getCmpEvents : " ); 
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		List<Feedback> empList = empDaoH.getEmployeeFeedback(selectedEventId);
		return empList;	
	}
	
	@Path("updateEvent")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)	
	public void updateEvent(Events event){
		System.out.println("Received in update Event");
		EventsDaoH eventsDaoH = new EventsDaoH();
		eventsDaoH.updateEvent(event);
	}
	
	@Path("deleteEvent/{eventId}")
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteEvent(@PathParam("eventId") int eventId){
		System.out.println("Data Recieved in delete : " + eventId);
		EventsDaoH eventsDao = new EventsDaoH();
		eventsDao.deleteEvent(Events.class,eventId);

	}
	
	@Path("searchByEventName/{selectedEvent}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Events searchByEventName(@PathParam("selectedEvent")  String selectedEvent){
		System.out.println("Recieved in searchByEventName : " ); 
		EventsDaoH eventsDaoH = new EventsDaoH();
		Events event = eventsDaoH.searchByEventName(selectedEvent);
		return event;	
	}
	
	@Path("getEmpByID/{empId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Employee getEmpByID(@PathParam("empId") int empId){
		System.out.println("Recieved in getCmpEvents : " ); 
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		Employee emp = EmployeeDaoH.getEmpByID(empId);
		return emp;	
	}



	@Path("getEmployeeX")
	@GET
	@Produces(MediaType.APPLICATION_XML)
	public Employee getEmployeeX(){
		return null;
	}

	@Path("AcceptEmp")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void AcceptEmp(Employee employee){
		System.out.println("Data Recieved in update : " + employee); 
		EmployeeDaoH empDao = new EmployeeDaoH();
		empDao.AcceptEmp(employee);

	}
	@Path("RejectEmp")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void RejectEmp(Employee employee){
		System.out.println("Data Recieved in update : " + employee); 
		EmployeeDaoH empDao = new EmployeeDaoH();
		empDao.AcceptEmp(employee);
	}

	@Path("deleteEmp/{empId}")
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteEmp(@PathParam("empId") int empId){
		System.out.println("Data Recieved in delete : " + empId);
		EmployeeDaoH empDao = new EmployeeDaoH();
		empDao.deleteEmp(Employee.class,empId);

	}
	@Path("updateEmp")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)	
	public void updateEmp(Employee employee){
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		empDaoH.updateEmp(employee);
	}
	@POST
	@Path("/uploadImage")	
	@Consumes({MediaType.MULTIPART_FORM_DATA})
	public void uploadImage(@FormDataParam("poster") InputStream fileInputStream ,@FormDataParam("poster") FormDataContentDisposition 
			formDataContentDisposition, 
			@FormDataParam("events") String StringEvents)throws IOException{

		ObjectMapper objMapper = new ObjectMapper();
		Events events = objMapper.readValue(StringEvents, Events.class);
		System.out.println(events);

		int read=0;
		byte[] bytes =new byte[1024];
		String path=this.getClass().getClassLoader().getResource("").getPath();
		String pathArr[]=path.split("/WEB-INF/classes/");

		FileOutputStream out= new FileOutputStream(new File(pathArr[0]+"/image/",formDataContentDisposition.getFileName()));

		while((read=fileInputStream.read(bytes)) != -1){
			out.write(bytes, 0, read);
		}
		out.flush();
		out.close();

		events.setPoster(formDataContentDisposition.getFileName());

		EventsDaoH eventsDaoH =new EventsDaoH();
		eventsDaoH.eventsRegister(events);
		
		
		String eventDomain = events.getEventDomain();
		System.out.println("Recieved in getAllMailids : " ); 
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		List<String> empMailList = empDaoH.getMailIds(eventDomain);
		
		try {
			System.out.println("inside try");
			List<String> x = MyResource1.hello(empMailList,events);
		} catch (MessagingException e) {
			System.out.println("catch");
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(empMailList);
	
}
@Path("getAllEvents")
@GET
@Produces(MediaType.APPLICATION_JSON)
public List<Events> getAllEvents(){
	System.out.println("Recieved in getAllEvents : " ); 
	EventsDaoH eventsDaoH = new EventsDaoH();
	return eventsDaoH.getAllEvents();	 
}
@Path("getAllSeminars")
@GET
@Produces(MediaType.APPLICATION_JSON)
public List<Events> getAllSeminars(){
	System.out.println("Recieved in getAllSeminars : " ); 
	EventsDaoH eventsDaoH = new EventsDaoH();
	return eventsDaoH.getAllSeminars();

}
@Path("getAllWorkshops")
@GET
@Produces(MediaType.APPLICATION_JSON)
public List<Events> getAllWorkshops(){
	System.out.println("Recieved in getAllWorkshops : " ); 
	EventsDaoH eventsDaoH = new EventsDaoH();
	return eventsDaoH.getAllWorkshops();

}
@Path("getAllHackathons")
@GET
@Produces(MediaType.APPLICATION_JSON)
public List<Events> getAllHackathons(){
	System.out.println("Recieved in getAllHackathons : " ); 
	EventsDaoH eventsDaoH = new EventsDaoH();
	return eventsDaoH.getAllHackathons();

}
@Path("getAllSocialEvents")
@GET
@Produces(MediaType.APPLICATION_JSON)
public List<Events> getAllSocialEvents(){
	System.out.println("Recieved in getAllSocialEvents : " ); 
	EventsDaoH eventsDaoH = new EventsDaoH();
	return eventsDaoH.getAllSocialEvents();

}
@Path("getAllOtherEvents")
@GET
@Produces(MediaType.APPLICATION_JSON)
public List<Events> getAllOtherEvents(){
	System.out.println("Recieved in getAllOtherEvents : " ); 
	EventsDaoH eventsDaoH = new EventsDaoH();
	return eventsDaoH.getAllOtherEvents();

}
/*@Path("sendMailToEmployee/{eventDomain}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> sendMailToEmployee(@PathParam("eventDomain")  String eventDomain){
		System.out.println("Recieved in getAllMailids : " ); 
		EmployeeDaoH empDaoH = new EmployeeDaoH();
		List<String> empMailList = empDaoH.getMailIds(eventDomain);
		try {
			System.out.println("inside try");
			List<String> x = MyResource1.hello(empMailList);
		} catch (MessagingException e) {
			System.out.println("catch");
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return empMailList;	
	}*/
@Path("verifyCard/{cardNumber}")
@GET
@Produces(MediaType.APPLICATION_JSON)
public boolean verifyCard(@PathParam("cardNumber")  String aCard){
	CCUtils pay = new CCUtils();
   /* if (args.length > 0) 
      aCard = args[0];
    else {
      BufferedReader input = 
        new BufferedReader(new InputStreamReader(System.in));
      System.out.print("Card number : ");
      aCard = input.readLine();
      }*/
    if (pay.getCardID(aCard) > -1) {
       System.out.println("This card is supported.");
       System.out.println("This a " + pay.getCardName(pay.getCardID(aCard)));
       try {
		System.out.println
		     ("The card number " + aCard + " is " 
		       + (pay.validCC(aCard)?" good.":" bad."));
		return true;
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		return false;
	}
       }
    else
       System.out.println("This card is invalid or unsupported!");
       return false;
    }


@Path("sendpaymentreceipt/{mail}/{eventId}")
@GET
@Produces(MediaType.APPLICATION_JSON)
public void sendMailToEmployee(@PathParam("mail")  String mail,@PathParam("eventId")  Integer eventId){	
	System.out.println("Recieved in getAllMailids : " ); 
	String empMail = mail;
	EventsDaoH eventsDaoH = new EventsDaoH();
	Events events = eventsDaoH.getEvents(eventId);	
	try {
		System.out.println("inside try");
		String x = MyResource1.paymentMail(empMail,events);
	} catch (MessagingException e) {
		System.out.println("catch");
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}


private static String generateOtp(int otpLength){
	SplittableRandom s = new SplittableRandom();
	StringBuilder sb = new StringBuilder();
	for(int i = 0; i < otpLength; i++){
		sb.append(s.nextInt(0,10));
	}
	return sb.toString();
}
@Path("sendOtp/{mobile}")
@GET
@Produces(MediaType.APPLICATION_JSON)
public String SMSOTP(@PathParam("mobile") String mobile ) {
	Twilio.init("AC9582bc925f96aff530e1d088aa22394b", "40a8b4283085d45131901506b03d6b1b");
	String otp = generateOtp(6);
	Message message = Message
			.creator(new PhoneNumber("+91"+mobile), // to
					new PhoneNumber("+14124447407"), // from
					"Hello, Welcome to Copro!, This is your OTP - " + otp)
			.create();
    System.out.println("otp sent");
	System.out.println(message.getSid());
	return otp;
}

@Path("feedback")
@POST
@Consumes(MediaType.APPLICATION_JSON)
public void feedback(Feedback feedback) {
	System.out.println("Registered sucessfully : " + feedback);
	 HibernateTemplate.addObject(feedback);
}
}