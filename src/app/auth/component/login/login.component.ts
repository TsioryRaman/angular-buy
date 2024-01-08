import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: [null,[Validators.minLength(5),Validators.maxLength(255),Validators.required]],
      password: [null,[Validators.minLength(5),Validators.maxLength(255),Validators.required]]
    },{updateOn:'change'})
  }

  onSubmit() {
      if(this.authService.login(this.formLogin.value))
      {
        this.router.navigateByUrl("product")
      }
    }
}
