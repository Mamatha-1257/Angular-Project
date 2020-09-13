package com.dto;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Events {
	
	
	@Id@GeneratedValue private int eventId;
	private String eventName;
	private String eventTag;
	private String eventDomain;
	private String mobile;
	private Date  startDate;
	private Date endDate;
	private double regFee;
	private String details;
	private String eventUrl;	
	private String poster;
	private String winner;
	private String runner;
	
	

	public String getWinner() {
		return winner;
	}

	public void setWinner(String winner) {
		this.winner = winner;
	}

	public String getRunner() {
		return runner;
	}

	public void setRunner(String runner) {
		this.runner = runner;
	}

	@Embedded
	private Address address;
	
	@ManyToOne       // Relating events to company
	@JoinColumn(name="companyCode")
	private Company company;
	
	//@ManyToMany(mappedBy = "eventsList" )   //Relating eventRegistrations to employee
	//List <Employee> empList = new ArrayList<Employee>();

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getEventTag() {
		return eventTag;
	}

	public void setEventTag(String eventTag) {
		this.eventTag = eventTag;
	}
	
	public String getEventDomain() {
		return eventDomain;
	}

	public void setEventDomain(String eventDomain) {
		this.eventDomain = eventDomain;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public double getregFee() {
		return regFee;
	}

	public void setregFee(double regFee) {
		this.regFee = regFee;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}
	
	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getEventUrl() {
		return eventUrl;
	}

	public void setEventUrl(String eventUrl) {
		this.eventUrl = eventUrl;
	}
	
	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public java.util.Date getStartDate() {
		return startDate;
	}

	public void setStartDate(java.util.Date startDate) {
		this.startDate = startDate;
	}


	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
	
	

}