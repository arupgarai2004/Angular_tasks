import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  company = 'Data coming from Parent to Child';
  constructor() { }

  ngOnInit(): void {
  }

}
