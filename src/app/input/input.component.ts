import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeholder:string;
  @Input() type:string;
  data:string;
  @Output() showData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  sendDataToParent(){
    this.showData.emit(this.data);
  }

}
