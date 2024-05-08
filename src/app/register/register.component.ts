import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form:FormGroup =new FormGroup({
    email:new FormControl("",[Validators.required,this.customeEmailValidator])
  })

  getError(control:any) : string {
      if(control.errors?.required && control.touched)
        return 'This field is required!';
      else if(control.errors?.emailError && control.touched)
        return 'Please enter valid email address!';
      else return '';
  }

  customeEmailValidator(control:AbstractControl) {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
      const value = control.value;
      if(!pattern.test(value) && control.touched) 
        return {
          emailError:true
        }
      else return null;
  }

  @Output() onSubmitLoginEvent = new EventEmitter();
  UserName : string="";
  Email : string="";
  Password:string ="";
  ConfirmPassword: string="";
  onSubmitLogin():void{
    this.onSubmitLoginEvent.emit({"UserName":this.UserName,"email":this.Email,"Password":this.Password,"ConfirmPassword":this.ConfirmPassword});
  }
  ngOnInit(): void {
  }
  
}
