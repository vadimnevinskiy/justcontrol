import {Data} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {}

  // Get response from API
  getDataFromApi(api) {
    return this.http.get<Data>(api);
  }
}
