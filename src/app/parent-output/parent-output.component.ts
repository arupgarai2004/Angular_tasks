import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent implements OnInit {
message:any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event:any) {
    this.message = $event
  }

}
