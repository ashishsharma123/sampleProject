import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomComponent } from './custom.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListComponentComponent } from './list-component/list-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    FormComponentComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
