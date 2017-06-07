import {User} from './user';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'custom-component',
  template: `
    <app-input placeholder="Enter My Name" type="text" (showData)="showAlert($event)"></app-input>
    <app-input placeholder="Enter My Last Name" type="text"></app-input>
    <app-input type="password" (showData)="showAlert($event)"></app-input>
    <app-input></app-input>
    <app-input></app-input>
    <app-input></app-input>
    <app-input></app-input>
    <app-input></app-input>
    <app-form-component (addUser)="addUserToList($event)" [userObj] = "user"></app-form-component>
    <br>
    <h3>Already Added User !!</h3>
    <br><br>
    <app-list-component [list] = "array" ></app-list-component>
  `,
  
})
export class CustomComponent {
  title = 'app';
  user:User;
  array:Array<any>=[];
  @Input() name:string;
  constructor(){

  }

  showAlert(value){
    alert(value);
  }

  addUserToList(event){
    console.log("Inside parent "+event)
    this.array.push(event);
    
    
  }
  
}
