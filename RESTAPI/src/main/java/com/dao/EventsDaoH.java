package com.dao;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.mapping.List;
import com.db.HibernateTemplate;
import com.dto.Employee;
import com.dto.Events;
import com.mysql.cj.Session;

public class EventsDaoH {
	
	public int eventsRegister(Events events) {
		//java.util.Date utilDate = new java.sql.Date(employee.getJoinDate().getTime()); 
		return HibernateTemplate.addObject(events);
	}
	public  java.util.List<Events> getAllEvents() {
		return (java.util.List<Events>)HibernateTemplate.getEventsListByQuery("from Events");
 	}
	public  java.util.List<Events> getAllSeminars() {
		return (java.util.List<Events>)HibernateTemplate.getEventsListByQuery("from Events where eventTag = 'Seminars'");
 	}
	public  java.util.List<Events> getAllWorkshops() {
		return (java.util.List<Events>)HibernateTemplate.getEventsListByQuery("from Events where eventTag = 'Workshops'");
 	}
	public  java.util.List<Events> getAllHackathons() {
		return (java.util.List<Events>)HibernateTemplate.getEventsListByQuery("from Events where eventTag = 'Hackathons'");
 	}
	public  java.util.List<Events> getAllSocialEvents() {
		return (java.util.List<Events>)HibernateTemplate.getEventsListByQuery("from Events where eventTag = 'SocialEvents'");
 	}
	public  java.util.List<Events> getAllOtherEvents() {
		return (java.util.List<Events>)HibernateTemplate.getEventsListByQuery("from Events where eventTag = 'Others'");
 	}
	public java.util.List<Events> getCmpEvents(String cmpCode) {
		java.util.List<Events> events = (java.util.List)HibernateTemplate.getCmpEvents(cmpCode);
		return events;
	}
	public int updateEvent(Events event){
 		return HibernateTemplate.updateObject(event);
 		}
	public int deleteEvent(Class events,int eventId){
 		return HibernateTemplate.deleteObject(Events.class, eventId);
 	}
	public java.util.List<Integer> getEmpEvents(int empId){
 		return HibernateTemplate.getEmpEvents(empId);
 	}
	public Events searchByEventName(String selectedEvent) {
		Events event= HibernateTemplate.searchByEventName(selectedEvent);
		return event;
	}
	
	public Events getEvents(Integer eventId) {
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		org.hibernate.Session session = factory.openSession();	
		Events events = (Events) session.get(Events.class, eventId);		
		System.out.println("Inside DAO  :"+ events); 
		return events;
	}
}