import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomComponent } from './custom.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { MyFilterPipe } from './my-filter.pipe';
import { InputComponent } from './input/input.component';
import { FirstDirectiveDirective } from './directive/first-directive.directive';



@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    FormComponentComponent,
    ListComponentComponent,
    MyFilterPipe,
    InputComponent,
    FirstDirectiveDirective
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
