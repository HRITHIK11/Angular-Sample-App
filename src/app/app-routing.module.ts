import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { BikeComponent } from './component/bike/bike.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:type/:id', component: BikeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
