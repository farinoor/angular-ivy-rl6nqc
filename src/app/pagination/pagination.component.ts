import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  workersList = [
    {
      postal: '1',
      id: '1',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '2',
      id: '2',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '3',
      id: '3',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '4',
      id: '4',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '5',
      id: '5',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '6',
      id: '6',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '7',
      id: '7',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '8',
      id: '8',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
  ];
  comments = [];
  filtercomments = [];
  pageLimit = 10;
  page = 1;
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data: any) => {
        this.comments = data;
        this.displaypage(1);
      });
  }

  ngOnInit() {}

  displaypage(page: number) {
    page = Math.ceil(page);
    let start = (page - 1) * this.pageLimit;
    let end = start + this.pageLimit;
    this.filtercomments = this.comments.slice(start, end);
    this.page = page;
  }
  search() {
    // get the name from user
    //   for each element in array check if it is matching
    // show the matching example
  }
  changepageLimit() {
    console.log(event);
    console.log(event?.target);
    // console.log(event?.target?.value);
    console.log((<HTMLInputElement>event?.target).value);
    this.pageLimit = parseInt((<HTMLInputElement>event?.target).value);
    this.displaypage(1);
  }
}
