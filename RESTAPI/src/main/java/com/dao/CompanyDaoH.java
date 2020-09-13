package com.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.db.HibernateTemplate;
import com.dto.Company;
import com.dto.Employee;

public class CompanyDaoH {

	private SessionFactory factory = null;
	
	public int companyRegister(Company company) {
		//java.util.Date utilDate = new java.sql.Date(employee.getJoinDate().getTime()); 
		return HibernateTemplate.addObject(company);
	}

	public Company companyLogin(String hrMail,String password) {

		return (Company)HibernateTemplate.getCompanyByUserPass(hrMail,password);
	}

 	/*public List<Company> GetAllCompanies() {
 		return (List<Company>)HibernateTemplate.getObjectListByQuery("from company c");
 	}
*/
 	public int editProfile(Employee employee){
 		
		return HibernateTemplate.updateObject(employee);

 	}
 

}