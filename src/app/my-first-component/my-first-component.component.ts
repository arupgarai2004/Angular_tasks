import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  counter:number=1;
  country='USA';
  birthday='APR 15, 1988';
  constructor() { }

  ngOnInit(): void {
  }
 deleteHero(){
	 this.counter=this.counter+1;
	 console.log(this.counter);
 }
 
}
