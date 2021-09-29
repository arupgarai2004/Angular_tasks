import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {
	users:any=[];
  isDone=false;
  isValid= true;

  constructor(private http: HttpClient) { }// depedncy injection 

  ngOnInit(): void {
	  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
		  this.users=data;
	  });	  
  }

}
