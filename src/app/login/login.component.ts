import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  loginform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}
}
