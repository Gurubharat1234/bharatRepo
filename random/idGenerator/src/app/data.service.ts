import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  postData(value){
  return this.http.post<any>('http://localhost:3000/posts',value)
  }
  getData(){
    return this.http.get<any>('http://localhost:3000/posts')
  }
}
