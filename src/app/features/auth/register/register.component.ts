import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/core/models/register';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];

  constructor(public accountService: AccountService, private router: Router,
              private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.initializeForm();
  }

  initializeForm() {

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(?:\+91[\s-]?|0)?[6-9]\d{4}[\s-]?\d{5}$|^(?:0\d{2,4}[\s-]?)?\d{6,8}$/)]],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]],
      profileImagePath: ['']
    })

    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })

  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true} 
    }
  }
  
  register() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    }, error => {
      this.validationErrors = error;
      console.log(error);
      this.toastr.error(error.message, error.status);
    })
  }
  
}

