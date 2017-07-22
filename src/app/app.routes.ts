import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';
import { LoginComponent } from './login/login.component';
import { LoginActivateService } from './services/login-activate.service';

const route: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: CustomComponent, canActivate:[LoginActivateService] },
  { path: 'login', component: LoginComponent},
  
];

export const routes = RouterModule.forRoot(route);
