import {User} from './user';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'custom-component',
  template: `
    <app-form-component (addUser)="addUserToList($event)"></app-form-component>
    <br>
    <h3>Already Added User !!</h3>
    <br><br>
    <app-list-component [list] = "array"></app-list-component>
  `,
  
})
export class CustomComponent {
  title = 'app';
  array:Array<any>=[];
  @Input() name:string;
  constructor(){

  }


  addUserToList(event){
    console.log("Inside parent "+event)
    this.array.push(event);
    
    
  }
  
}
