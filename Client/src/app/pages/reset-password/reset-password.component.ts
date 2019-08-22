import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formDetails: any = this.fb.group({
    otp: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })
  ngOnInit() {
  }

}
