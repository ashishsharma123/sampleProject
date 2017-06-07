
import { User } from '../user';
import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  user: User;
  @Output() addUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() userObj:User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  example(name:string,last:string){

  }

  onSubmit() {
    console.log("user "+JSON.stringify(this.user));
    this.addUser.emit(this.user);
    this.user = new User();
    this.example('Ashish','sharma');

  }

}
