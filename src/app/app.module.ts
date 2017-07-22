import {HttpModule} from '@angular/http';
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
import { LoginComponent } from './login/login.component';
import { LoginActivateService } from './services/login-activate.service';



@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    FormComponentComponent,
    ListComponentComponent,
    MyFilterPipe,
    InputComponent,
    FirstDirectiveDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule      
  ],
  providers: [LoginActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
