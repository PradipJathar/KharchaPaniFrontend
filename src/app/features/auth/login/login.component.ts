import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validationErrors: string[] = [];

  constructor(public accountService: AccountService, private router: Router, 
              private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.initializeForm();
  }

  initializeForm() {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    })

  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    }, error => {
      this.validationErrors = error;
      this.toastr.error(error.message, error.status);
    })
  }

  logout() {
    this.accountService.logout();
  }
  
}
