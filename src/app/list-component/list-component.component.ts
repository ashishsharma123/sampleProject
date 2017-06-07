import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { MyFilterPipe } from '../my-filter.pipe';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  keyword:string='';
  constructor(
    
  ) { }
  @Input() list:Array<any>;
  @Output() update : EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
  }

  updateData(user){

  }

}
