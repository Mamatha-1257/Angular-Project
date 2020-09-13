package com.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Company {
	
	@Id
	private String compCode;
	private String compName;
	private String hrMail;
	private String website;
	private String hrPassword;
	private String mobile;
	private Address address;
	
	@OneToMany(mappedBy = "company")      // Relating company to employee
	List <Employee> empList = new ArrayList<Employee>();
	
	@OneToMany(mappedBy = "company" )     // Relating company to events
	List <Events> eventList = new ArrayList<Events>();

	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Company(String compCode, String compName, String hrMail, String website, String hrPassword,
		String mobile, Address address, List<Employee> empList, List<Events> eventList) {
		super();
		this.compCode = compCode;
		this.compName = compName;
		this.hrMail = hrMail;
		this.website = website;
		this.hrPassword = hrPassword;
		
		this.mobile = mobile;
		this.address = address;
		this.empList = empList;
		this.eventList = eventList;
	}

	public String getCompCode() {
		return compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	public String getCompName() {
		return compName;
	}

	public void setCompName(String compName) {
		this.compName = compName;
	}

	public String getHrMail() {
		return hrMail;
	}

	public void setHrMail(String hrMail) {
		this.hrMail = hrMail;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getHrPassword() {
		return hrPassword;
	}

	public void setHrPassword(String hrPassword) {
		this.hrPassword = hrPassword;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Company [compCode=" + compCode + ", compName=" + compName + ", hrMail=" + hrMail + ", website="
				+ website + ", hrPassword=" + hrPassword + ", mobile=" + mobile
				+ ", address=" + address + ", empList=" + empList + ", eventList=" + eventList + "]";
	}
	
	
		
}