import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { reviews } from 'src/app/reviews';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;
  reviews=[];
  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    this.reviews = this.route.snapshot.params['reviews'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:3000/trending-movies';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:3000/theatre-movies';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:3000/popular-movies';
    }
    this.getMovie();
  }
  

 
  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
  
  addto(data:string){
    let type = this.route.snapshot.params['type'];
    let id = this.route.snapshot.params['id']; 
    let reviews = this.route.snapshot.params['reviews'];
    let url = `http://localhost:3000/${type}-movies/${id}`
    this.http.patch(url,{reviews :[data]} ).subscribe((data) =>{
      console.log(data)
    })
  
  }
  
  getMovieById(id:number){
    let type = this.route.snapshot.params['type'];
    let url = `http://localhost:3000/${this.type}-movies`
    return this.http.get(`${url}/${this.id}`)
  }
  updateMovie(id:any,data:any){
    let url = `http://localhost:3000/${this.type}-movies`
    http://localhost:3000/popular-movies?id=
    return this.http.post(`${this.url}/?id=${id}`,data)
  }
}
