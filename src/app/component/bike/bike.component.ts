import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { reviews } from 'src/app/reviews';
@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss'],
})
export class BikeComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  bikes: any;
  bike: any;
  reviews=[];
  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    this.reviews = this.route.snapshot.params['reviews'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:3000/Fuel';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:3000/Best';
    }
    this.getMovie();
  }
  

 
  getMovie() {
    this.http.get(this.url).subscribe((bikes) => {
      this.bikes = bikes;
      let index = this.bikes.findIndex(
        (bike: { id: string }) => bike.id == this.id
      );
      if (index > -1) {
        this.bike = this.bikes[index];
      }
    });
  }
  
  addto(data:string){
    let type = this.route.snapshot.params['type'];
    let id = this.route.snapshot.params['id']; 
    let reviews = this.route.snapshot.params['reviews'];
    let url = `http://localhost:3000/${type}/${id}`
    this.http.patch(url,{reviews :[data]} ).subscribe((data) =>{
      console.log(data)
    })
  
  }
  
  getMovieById(id:number){
    let type = this.route.snapshot.params['type'];
    let url = `http://localhost:3000/${this.type}`
    return this.http.get(`${url}/${this.id}`)
  }
  updateMovie(id:any,data:any){
    let url = `http://localhost:3000/${this.type}`
    return this.http.post(`${this.url}/?id=${id}`,data)
  }
}
