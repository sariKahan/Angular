import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../interface/comment';
import { Service} from '../interface/Service'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
env = environment;
  constructor(public  http:HttpClient) {}

getAllServices():Observable<Service[]>{
    return this.http.get<Service[]>(this.env.URL+ "/Service");
  }
  
  getServiceById(id:number):Observable<Service>{
    return this.http.get<Service>(this.env.URL +"/Service/"+id);
  }
  
  addService(service:Service):Observable<Service[]>{
    return this.http.post<Service[]>(this.env.URL+ "/Service",service);
  }

  getAllComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.env.URL+ "/Comments");
  }
  
  // getServiceById(id:number):Observable<Service>{
  //   return this.http.get<Service>(this.env.URL +"/Comments/"+id);
  // }
  
  addComment(comment:Comment):Observable<Comment[]>{
    return this.http.post<Comment[]>(this.env.URL+ "/Comments",comment);
  }
  addLike(id:number):Observable<Comment[]>{
    return this.http.put<Comment[]>(this.env.URL+ "/Comments/"+id,id);
  }
}
