import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent
  implements OnInit, OnDestroy, AfterContentInit
{
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
}
