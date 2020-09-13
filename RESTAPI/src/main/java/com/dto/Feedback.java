package com.dto;
import javax.persistence.Embedded;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

	@Entity
	@XmlRootElement
	public class Feedback {
		@Id@GeneratedValue private int id;
		private int empId;
		private int eventId;
		private String empName;
		
		private String rating;
		private String comments;
		
		
		public String getRating() {
			return rating;
		}
		public void setRating(String rating) {
			this.rating = rating;
		}
		public String getComments() {
			return comments;
		}
		public void setComments(String comments) {
			this.comments = comments;
		}
		private String empMail;
		
		public int getId() {
			return id;
		}
		public int getEmpId() {
			return empId;
		}
		public void setEmpId(int empId) {
			this.empId = empId;
		}
		public int getEventId() {
			return eventId;
		}
		public void setEventId(int eventId) {
			this.eventId = eventId;
		}
		public String getEmpName() {
			return empName;
		}
		public void setEmpName(String empName) {
			this.empName = empName;
		}
		
		public String getEmpMail() {
			return empMail;
		}
		public void setEmpMail(String empMail) {
			this.empMail = empMail;
		}
		public void setId(int id) {
			this.id = id;
		}
		
		
	}

