import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formDetails: any = this.fb.group({
    email: ['', Validators.required],
    password: ['']
  })
  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Fields');
    console.log(this.formDetails);
  }
}
