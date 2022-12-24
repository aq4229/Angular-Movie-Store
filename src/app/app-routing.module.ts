import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './MoviesSection/movie-detail/movie-detail.component';
import { MovieListingComponent } from './MoviesSection/movie-listing/movie-listing.component';

const routes: Routes = [
  {path: '', component: MovieListingComponent  },
  { path: 'MovieDetials/:id', component: MovieDetailComponent },
  { path: 'MovieDetials', component: MovieDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
