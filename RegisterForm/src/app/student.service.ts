import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './models/Student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url:string = "https://localhost:44350/api/student/";

  constructor(private httpclient: HttpClient) {
    
   }

getData() {
  return this.httpclient.get(this._url + 'findall');
}

createUser(user: Student) {
  return this.httpclient.post(this._url + 'create', user);
}

find(studentid: string):Observable<any> {
  return this.httpclient.get(this._url + 'find/' + studentid)
  .pipe(map((res:Response) => res.json()));
}

update(user: Student) {
  return this.httpclient.post(this._url + 'update', user);
}


delete(studentid: number){
  return this.httpclient.delete(this._url + 'delete/' + studentid);
}
}
