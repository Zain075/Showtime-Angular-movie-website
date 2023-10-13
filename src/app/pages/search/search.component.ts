import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api: ApiService, private title: Title, private meta: Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({ name: 'description', content: 'search here movies like avatar,war etc' });
  }

  ngOnInit(): void {
  }

  searchResult: any; // to store search result
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.api.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchmovie##');
      this.searchResult = result.results;
    });
  }

}