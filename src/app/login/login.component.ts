import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  UserName : string="";
  Password:string ="";
  onSubmitLogin():void{
    this.onSubmitLoginEvent.emit({"UserName":this.UserName,"password":this.Password});
  }
}
