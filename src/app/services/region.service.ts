import { Region } from './../data/Region';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
URL :string='http://localhost:9090/hr';
  constructor(private http:HttpClient) { }

  public getAllRegions():Observable<Region[]>{
    let httpHeader:HttpHeaders= new HttpHeaders({
      'accept' :'application/json',
      'authorization' :'my-token'
    })
   return this.http.get<Region[]>(`${this.URL}/regions`,  {headers:httpHeader}) ;
  }
  public getRegionById(id:number):Observable<Region>{
  // let httpHeader:HttpHeaders= new HttpHeaders({
  //   'accept' :'application/json',
  //   'authorization' :'my-token'
  // })
  console.log(`${this.URL}/regions/${id}`)
    return this.http.get<Region>(`${this.URL}/regions/${id}`
    //,{      headers:httpHeader}
    )
  }
  saveRegion(region :Region):Observable<Region>{
    return this.http.post<Region>(`${this.URL}/regions`,region)
  }
  deleteRegion(id :Number):Observable<string>{
    return this.http.delete<string>(`${this.URL}/regions/${id}`)
  }
}
