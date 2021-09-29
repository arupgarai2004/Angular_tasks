import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
pageName:any;
eventBinding="Not Clicked";
userName:string="jhon!";
emailId:string="abc@xyz.com";//two way binding 
  constructor() { }

  ngOnInit(): void {
	  this.pageName="Data Binding" //interpollation
  }
  evnetFunction(){
	  this.eventBinding="Clicked"; ////Event binding
  }

}
