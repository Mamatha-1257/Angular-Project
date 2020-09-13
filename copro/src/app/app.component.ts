
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'demo';

  constructor(private router: Router) {
     
  setTimeout(() => {
      this.router.navigate(['home']);
  }, 5000);

}
}
