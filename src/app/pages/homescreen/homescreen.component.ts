import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit{

bannerResult:any=[]; // to hold banner movie data
trendingMovieResult: any = [];// to hold trending movies data
//to hold various genres of movies
actionMovie: any = [];
  adventureMovie: any = [];
  animationMovie: any = [];
  comedyMovie: any = [];
  documentaryMovie: any = [];
  sciencefictionMovie: any = [];
  thrillerMovie: any = [];



  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.adventureMovies();
    this.comedyMovies();
    this.animationMovies();
    this.documentaryMovies();
    this.thrillerMovies();
    this.sciencefictionMovies();
  }

  //banner data
  bannerData(){
    this.api.bannerApiData().subscribe((result)=>{
      console.log(result,"bannerresult");
      this.bannerResult = result.results;
    })
  }

  // trending movie api data
  trendingData() {
    this.api.trendingMoviesApiData().subscribe((result) => {
      console.log(result, 'trendingresult');
      this.trendingMovieResult = result.results;
    });
  }

  //action movie
  actionMovies(){
    this.api.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionmovie#');
      this.actionMovie = result.results;
    })
  }

  //adventure movie
  adventureMovies(){
    this.api.fetchActionMovies().subscribe((result)=>{
      console.log(result,'adventuremovie#');
      this.adventureMovie = result.results;
    })
  }

  //animation movie
  animationMovies(){
    this.api.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationmovie#');
      this.animationMovie = result.results;
    })
  }

   //comedy movie
   comedyMovies(){
    this.api.fetchComedyMovies().subscribe((result)=>{
      console.log(result,' comedymovie#');
      this. comedyMovie = result.results;
    })
  }

   //documentary movie
   documentaryMovies(){
    this.api.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,' documentarymovie#');
      this. documentaryMovie = result.results;
    })
  }

   //sciencefiction movie
   sciencefictionMovies(){
    this.api.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'sciencefictionmovie#');
      this.sciencefictionMovie = result.results;
    })
  }

  //thriller movie
  thrillerMovies(){
    this.api.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'thrillermovie#');
      this.thrillerMovie = result.results;
    })
  }


}
