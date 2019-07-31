import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formDetails: any = {};
  constructor() { }

  ngOnInit() {
    this.loadModel();
  }

  loadModel() {
    this.formDetails = {
      "showForm" : true,
      "formStyle":{
        "width": "500px",
        "margin": "0 auto",
        "box-shadow": "0px 0px 4px 2px #ccc"
      },
      "formHeader": {
        "title": "Login",
        "formHeaderStyle": {
          "background-color": "green",
          "color": "white",
          "padding": "10px",
          "text-align": "center"
        }
      },
      "formBody": {
        "formBodyStyle": {
          "padding": "10px",
          "background": "#ffffff"
        },
        "formFields": [
          [{"field": "input", "id":"email", "type": "text", "placeholder": "Enter email here...", "label":"Email"}],
          [{"field": "input", "id":"password", "type": "password", "placeholder": "Enter password here...", "label":"Password"}]
        ]
      },
      "formFooter": {

      }
    }
  }

}
