import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  certificates:any = []
  constructor() { }
  pushCert(arr:any){
    this.certificates.push(arr)
    console.log(`pushing ${arr.certificado} ${this.certificates.year}`)
  }
}
