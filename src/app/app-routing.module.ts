import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/component/home/home.component';
import { MovieComponent } from '../app/component/movie/movie.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:type/:id', component: MovieComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
