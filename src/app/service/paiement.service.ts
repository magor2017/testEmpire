import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private link="http://127.0.0.1:5000";
  private httpOption={
    headers:new HttpHeaders({
      "Content-Type":"application/x-www-form-urlencoded"
    })
  }

  constructor(private http:HttpClient) { }
  getToken(tel,forfait):Promise<any>{
    let params="param="+JSON.stringify({tel:tel,forfait:forfait});
    return new Promise((resolve,reject)=>{
      this.http.post(this.link+"/client/paiement",params,this.httpOption).subscribe(rep=>{
        console.log(rep)
        if(rep["success"]===1){
          resolve(rep);
        }else{
          reject(rep);
        }
      })
    });
  }
}
