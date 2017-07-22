import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app';
  constructor(){
    setTimeout(this.doSomething,1000);
    console.log("after setTimeout");
    
  }

  doSomething(){
    //logic
  }
   
  
  
}
