import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private api:ApiService, private router:ActivatedRoute){}
 
 
 getMovieResult: any;
 getMovieVideo: any;
 getMovieCast:any;

 
  ngOnInit(): void {
    //to get id
    let getparamId = this.router.snapshot.paramMap.get('id')
    console.log(getparamId,'getparamid#');

    this.getMovie(getparamId);
    this.getCast(getparamId);
    this.getVideo(getparamId)
  }

  // get movie 
  getMovie(id:any){
    this.api.getMovieDetails(id).subscribe((result)=>{
      console.log(result,"getmoviedetails#");
      this.getMovieResult = result;
    })
  }

  //get movie videos
  getVideo(id:any){
    this.api.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getvideo#');
      //to play trailer from youtube
      result.results.forEach((element:any) => {
        if(element.type=="Trailer")
        {
          this.getMovieVideo = element.key;
        }
    });
    })
  }


//get movie cast api
  getCast(id:any){
    this.api.getMovieCast(id).subscribe((result)=>{
      console.log(result,'getcast#');
      this.getMovieCast = result.cast;
    })
  }

}
