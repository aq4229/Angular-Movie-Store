import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MoviesList } from '../Services/movies';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public MovieDetial: any ;
  constructor(private activerout: ActivatedRoute) { }

  ngOnInit(): void {
    this.activerout.queryParams.subscribe((res:any) => {
      let id = res?.id;
     from(MoviesList.filter(x => x.id == id)).
      subscribe(data =>{
        this.MovieDetial = data;
      } )
    })


  }
ArrayToString(data:any){
  return data.toString();
}
}
