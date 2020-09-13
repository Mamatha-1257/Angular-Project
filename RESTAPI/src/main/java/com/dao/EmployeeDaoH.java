package com.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.dto.Employee;
import com.dto.Employee_events;
import com.dto.Feedback;
import com.db.HibernateTemplate;

public class EmployeeDaoH {

	private SessionFactory factory = null;
	private Serializable serializable;

	public Employee empLogin(String empMail,String password) {
        System.out.println("inside emplogin");
		return (Employee)HibernateTemplate.getEmpByUserPass(empMail,password);
	}

 	public int empRegister(Employee employee) {
		//java.util.Date utilDate = new java.sql.Date(employee.getJoinDate().getTime()); 
		return HibernateTemplate.addObject(employee);
	}
 	
 	public int employeesForEvent(Employee_events emp_events) {
		//java.util.Date utilDate = new java.sql.Date(employee.getJoinDate().getTime()); 
		return HibernateTemplate.addObject(emp_events);
	}
 	public List<Employee_events> getEmployeeByEvents(int selectedEventId) {
		List<Employee_events> employees = (List)HibernateTemplate.getEmployeeByEvents(selectedEventId);
		return employees;
 	}
 
	public List<Feedback> getEmployeeFeedback(int selectedEventId) {
		List<Feedback> employees = (List)HibernateTemplate.getEmployeeFeedback(selectedEventId);
		return employees;
 	}
 	
 	public int updateEmp(Employee employee){
 		return HibernateTemplate.updateObject(employee);
 		}
 	
 	public static Employee getEmpByID(int empId) {
        System.out.println("getting employee by ID");
		return (Employee)HibernateTemplate.getEmpByID(empId);
	}

 	
 	
 	public List<Employee> getAllEmployees(String cmpCode) {
		List<Employee> employees = (List)HibernateTemplate.getempListByQuery(cmpCode);
		return employees;
 	}
 	public int AcceptEmp(Employee employee) {
		return HibernateTemplate.updateObject(employee);
	}
 	public int RejectEmp(Employee employee) {
		return HibernateTemplate.updateObject(employee);
 	}
 	public int deleteEmp(Class employee,int empId){
 		return HibernateTemplate.deleteObject(Employee.class, empId);
 	}
 	public List<String> getMailIds(String eventDomain) {
		List<String> empmail = (List)HibernateTemplate.getEmpMailListByQuery(eventDomain);
		return empmail;
 	}
	
}