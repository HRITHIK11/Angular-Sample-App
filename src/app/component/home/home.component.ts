import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Fuel: any;
  Best: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getFuel();
    this.getBest();
  }

  getFuel() {
    this.http
      .get('http://localhost:3000/Fuel')
      .subscribe((movies) => {
        this.Fuel= movies;
      });
  }

  getBest() {
    this.http
      .get('http://localhost:3000/Best')
      .subscribe((movies) => {
        this.Best = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

}
