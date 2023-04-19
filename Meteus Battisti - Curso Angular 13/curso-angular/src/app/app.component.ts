import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName= 'Gil';
  userDate={
    email:'gil.res@mail.com',
    role: 'admin'
  }
  title = 'curso-angular';
}
