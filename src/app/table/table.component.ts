import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../shared/interfaces';

const API: string = 'assets/data.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Data;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getData(API);
  }


  getData(api) {
    this.http.get<Data>(api)
      .subscribe(response => {
        this.data = response;
      });
  }
}
