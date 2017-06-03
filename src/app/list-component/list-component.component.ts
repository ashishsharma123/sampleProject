import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor() { }
  @Input() list:Array<any>;
  ngOnInit() {
  }

}
