
import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map} from 'rxjs';
import { MoviesList } from '../Services/movies';
@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss']
})
export class MovieListingComponent implements OnInit {
  public model: any;
  public MovieList: any = [];
  formatter = (result: string) => result;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? [] : MoviesList.map(x => x.name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor() { }

  ngOnInit(): void {
    this.MovieList = MoviesList
  }

  MoveList(valuea: any) {
    this.MovieList = MoviesList.filter(movie => movie.name.toLowerCase().includes(valuea.toLowerCase()));
  }
}
