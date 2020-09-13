package com.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Employee {
	
	
	@Id public int empId; 
	
	private String empName;
	private String companyCode;
	private String empMail;
	private String empPassword;
	

	private String mobile;
	private String interest1;
	private String interest2;
	private String interest3;
	private String status;
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@ManyToOne      //Relating employee to company
	@JoinColumn(name="companyCode", insertable = false, updatable = false)
	private Company company;
	
	//@ManyToMany 
	//@JoinColumn(name = "eventId")//Relating employee to events
	//List <Events> eventsList = new ArrayList<Events>();

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employee(int empId, String empName, String companyCode, String empMail, String empPassword, String mobile,
			String interest1, String interest2, String interest3) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.companyCode = companyCode;
		this.empMail = empMail;
		this.empPassword = empPassword;
		this.mobile = mobile;
		this.interest1 = interest1;
		this.interest2 = interest2;
		this.interest3 = interest3;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getEmpMail() {
		return empMail;
	}

	public void setEmpMail(String empMail) {
		this.empMail = empMail;
	}

	public String getEmpPassword() {
		return empPassword;
	}

	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getInterest1() {
		return interest1;
	}

	public void setInterest1(String interest1) {
		this.interest1 = interest1;
	}

	public String getInterest2() {
		return interest2;
	}

	public void setInterest2(String interest2) {
		this.interest2 = interest2;
	}

	public String getInterest3() {
		return interest3;
	}

	public void setInterest3(String interest3) {
		this.interest3 = interest3;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", companyCode=" + companyCode + ", empMail="
				+ empMail + ", empPassword=" + empPassword + ",mobile="
				+ mobile + ", interest1=" + interest1 + ", interest2=" + interest2 + ", interest3=" + interest3
				+ ", company=" + company + "]";
	}

	

	

	
}