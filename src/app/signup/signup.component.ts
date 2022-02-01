import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupdata = {
    user: 'umar',
    password: 'umar@0786',
  };
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  senduserdata(f: any): void {
    // console.log(this.signupdata);
    // this.http
    //   .post('https://jsonplaceholder.typicode.com/comments', this.signupdata)
    //   .subscribe((data: any) => {
    //     console.log(data);
    //   });
    console.log(f);
    console.log(f.value);
  }
}
