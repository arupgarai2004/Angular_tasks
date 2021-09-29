import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
  message: any = "Child to Praent Data sharing using @Output and EventEmitter"
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
