package com.db;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dto.Company;
import com.dto.Employee;
import com.dto.Employee_events;
import com.dto.Events;
import com.dto.Feedback;

public class HibernateTemplate {

	private static SessionFactory sessionFactory;
	
	static {
		sessionFactory = new Configuration().configure().buildSessionFactory();
	}
	
	public static int addObject(Object obj){
		System.out.println("Inside Template...");
		int result=0;
		
		Transaction tx=null;
		
		try {
			
			Session session=sessionFactory.openSession();
			tx=session.beginTransaction();
			
			session.save(obj);
			
			tx.commit();
			
			result=1;
			
		} catch (Exception e) {
		
			tx.rollback();
			
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static Object getObject(Class c,Serializable serializable)
	{
		Object obj=null;
		
		try {			
			return sessionFactory.openSession().get(c,serializable);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return obj;
	}
	
	public static Object getEmpByUserPass(String loginId,String password) {
		System.out.println("inside emp template");
		String queryString = "from Employee where empMail = :loginId and empPassword =:password and status = 'Accepted'";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  query.setString("password", password);
		  Object queryResult = query.uniqueResult();
		  Employee employee = (Employee)queryResult;
		  return employee; 
		}
	
	public static Object getCompanyByUserPass(String loginId,String password) {
		
		String queryString = "from Company where hrMail = :loginId and hrPassword =:password";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  query.setString("password", password);
		  Object queryResult = query.uniqueResult();
		  Company company = (Company)queryResult;
		  return company; 
		}
	
	public static Object getObjectByEmail(String email) {
		
		String queryString = "from Employee where email = :email";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("email", email);
		  Object queryResult = query.uniqueResult();
		  Employee employee = (Employee)queryResult;
		  return employee; 
		}
	
	public static List<Employee_events> getEmployeeByEvents(int selectedEventId)
	{
		String queryString = "from Employee_events where eventId = :selectedEventId";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setInteger("selectedEventId", selectedEventId);
		List<Employee_events> empList = query.list();
		return empList;
	}
	
	public static List<Feedback> getEmployeeFeedback(int selectedEventId)
	{
		String queryString = "from Feedback where eventId = :selectedEventId";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setInteger("selectedEventId", selectedEventId);
		List<Feedback> empList = query.list();
		return empList;
	}
	public static List<Integer> getEmpEvents(int selectedempId)
	{
		String queryString = "select eventId from Employee_events where empId = :selectedempId";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setInteger("selectedempId", selectedempId);
		List<Integer> eventIdList = query.list();
		System.out.println("end");
		return eventIdList;
	}
     public static Object getEmpByID(int empId) {
		
		String queryString = "from Employee where empId = :empId";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setInteger("empId", empId);
		  Object queryResult = query.uniqueResult();
		  Employee employee = (Employee)queryResult;
		  return employee; 
		}
	
	public static List<Object> getObjectListByQuery(String query)
	{
		return sessionFactory.openSession().createQuery(query).list();
	}
	public static List<Employee> getempListByQuery(String cmpCode)
	{
		String queryString = "from Employee where companyCode = :cmpCode";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setString("cmpCode", cmpCode);
		List<Employee> empList = query.list();
		return empList;
	}
	
	public static List<Events> getCmpEvents(String cmpCode)
	{
		String queryString = "from Events where companyCode = :cmpCode";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setString("cmpCode", cmpCode);
		List<Events> eventList = query.list();
		return eventList;
	}
	
	public static Events searchByEventName(String selectedEvent)
	{
		String queryString = "from Events where eventName = :selectedEvent";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setString("selectedEvent", selectedEvent);
		Events event = (Events)query.uniqueResult();;
		return event;
	}
	
	public static List<String> getEmpMailListByQuery(String eventDomain)
	{ System.out.println("in template");
		String queryString = "select empMail from Employee where (interest1 = :eventDomain or interest2 = :eventDomain or interest3 = :eventDomain) and status = 'Accepted'";
		Query query = sessionFactory.openSession().createQuery(queryString);
		query.setString("eventDomain", eventDomain);
		List<String> empMailList = query.list();
		System.out.println("end");
		return empMailList;
	}
	public static List<Events> getEventsListByQuery(String query)
	{
		return sessionFactory.openSession().createQuery(query).list();
	}
	public static int updateObject(Object obj)
	{
		int result=0;
		
		Transaction tx=null;
		
		try {
			
			Session session=sessionFactory.openSession();
			tx=session.beginTransaction();
			
			session.saveOrUpdate(obj);
			
			tx.commit();
			
			result=1;
			
		} catch (Exception e) {
		
			tx.rollback();
			
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static int deleteObject(Class c,Serializable serializable)
	{
		int result=0;
		
		Session session=sessionFactory.openSession();
		
		Transaction tx=session.beginTransaction();
		
		try {
			
			Object obj=session.get(c,serializable);
			
			session.delete(obj);
			
			tx.commit();
			
			result=1;
						
		} catch (Exception e) {
			
			e.printStackTrace();
			
			tx.rollback();
		}
		
		return result;
	}

	public static List<Object> getObjectListByName(Class c, String columName, String value) {
		Session session=sessionFactory.openSession();
		  Criteria criteria = session.createCriteria(c);
			Criterion nameCriterion = Restrictions.eq(columName, value);
			criteria.add(nameCriterion);
			return criteria.list();
	}
}