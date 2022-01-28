import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit, OnDestroy {
  conditionApply = true;
  TsArray = [1, 2, 3, 4, 5];
  //conditionApply = false;'

  constructor() {
    // when the class object created
    console.log('constructor');
  }

  ngOnInit() {
    // when the component first loads in the dom
    console.log('ngOnInit');
  }
  ngOnDestroy() {
    // when the component destroy from the dom
    console.log('ngOnDestroy');
  }
  changing() {
    if (this.conditionApply) this.conditionApply = false;
    else this.conditionApply = true;
  }

  hello() {
    // alert('hello');
    this.controlType = this.controlType == 'text' ? 'password' : 'text';
  }
  controlType = 'text';
  hello1 = 'hello';

  welcome() {
    alert('welcome');
  }
}
