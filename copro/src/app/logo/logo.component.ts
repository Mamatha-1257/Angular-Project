import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit { 
  closeResult: string;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
   setTimeout(() => {
      this.router.navigate(['home']);
  }, 5000);  
  }
  }
