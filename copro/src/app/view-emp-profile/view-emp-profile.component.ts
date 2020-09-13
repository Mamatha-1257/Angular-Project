import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
declare var jQuery:any;

@Component({
  selector: 'app-view-emp-profile',
  templateUrl: './view-emp-profile.component.html',
  styleUrls: ['./view-emp-profile.component.css']
})
export class ViewEmpProfileComponent implements OnInit {
  employee:any;
  myEmp:any;
  editObject:any;

  constructor(private empservice:EmployeeService) {
    this.editObject = {empId:'', empName:'', companyCode:'', empMail:'', empPassword:'', mobile:'', interest1:'', interest2:'', interest3:'',status:'pending'};
  }

  ngOnInit(): void {
    this.employee = this.empservice.getEmpdetails();
    console.log(this.employee);
    this.empservice.getEmpByID(this.employee).subscribe((result:any) => {console.log(result);this.myEmp=result;});
  }
  showEditPopup(editEmp:any){
    this.editObject = editEmp;
    jQuery('#empModel').modal('show');
  }
  updateEmp(){
    this.empservice.updateEmp(this.editObject).subscribe();
    console.log(this.editObject);
  }


}
