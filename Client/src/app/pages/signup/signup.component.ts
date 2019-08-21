import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formDetails: any = this.fb.group({
  	username: ['', Validators.required],
  	email: ['', Validators.required],
  	password: ['', Validators.required],
  	confirmPassword: ['', Validators.required]
  })

  ngOnInit() {
  }

}
