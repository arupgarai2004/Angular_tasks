import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'; 

@Component({
  selector: 'app-direct-inject',
  templateUrl: './direct-inject.component.html',
  styleUrls: ['./direct-inject.component.css']
})
export class DirectInjectComponent implements OnInit {
userList:any;
  constructor(private service:AppService) { } //dependency injection

  ngOnInit(): void {
	 this.userList= this.service.getUser();
	 console.log(this.userList);
	 
	 this.service.sendValues('To Share data from one to another component');
  }
  
  

}
