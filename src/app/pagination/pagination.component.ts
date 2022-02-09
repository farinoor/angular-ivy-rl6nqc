import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  comments = [];
  originaldata = [];
  filtercomments = [];
  pageLimit = 10;
  page = 1;
  textFromUser = '';
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data: any) => {
        this.comments = data;
        this.originaldata = this.comments.slice();
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
    // get a text from user
    let textFromUser = this.textFromUser;
    let searchText = '/' + textFromUser + '/i';
    // for each element in array check if it is matching
    let heading = Object.keys(this.originaldata[0]);
    console.log(heading);
    this.comments = this.originaldata.filter((eachData) => {
      let ismatch = false;
      ismatch = heading.some((eachhead) => {
        return String(eachData[eachhead]).includes(textFromUser);
      });

      return ismatch;
    });
    // show the matching example
    this.displaypage(1);
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
