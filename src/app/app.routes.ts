import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';

const route: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: CustomComponent },
  
];

export const routes = RouterModule.forRoot(route);
