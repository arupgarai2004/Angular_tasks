import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'   // by the root application injector.
})
export class AppService {
users:any=[];

  constructor(private http: HttpClient) { }
  getUser(){
   return "Direct Injection";
  }
  
  datSource=  new BehaviorSubject<any>('');
  getValue= this.datSource.asObservable();
  
  sendValues(data:any){
	  this.datSource.next(data);
  }
  
}
