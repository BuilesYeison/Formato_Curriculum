import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  //Service where all info data setted in all components is saved into new arrays
  certificates:any = []
  academic:any = []
  complementary:any = []
  experiences:any = []
  constructor() { }
  pushCert(arr:any){this.certificates = arr}
  pushAcademicInfo(arr:any){this.academic = arr}
  pushComplementary(arr:any){this.complementary = arr}
  pushExperience(arr:any){this.experiences = arr}
  show(){
    console.log(this.certificates)
  }
}
