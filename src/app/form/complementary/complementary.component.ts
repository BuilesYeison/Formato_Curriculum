import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators}from "@angular/forms"
import {GetuserinfoService} from '../getuserinfo.service'

@Component({
  selector: 'app-complementary',
  templateUrl: './complementary.component.html',
  styleUrls: ['./complementary.component.scss']
})
export class ComplementaryComponent implements OnInit {
  complementary:any=[]
  getUserInfoService = new GetuserinfoService;
  complementaryForm = new FormGroup({
    place:new FormControl("", [Validators.required]),
    duration:new FormControl("", [Validators.required,Validators.pattern("[0-9]*")]),
    year:new FormControl("", [Validators.required, Validators.pattern("[0-9]{4}")]),
    description:new FormControl("", [Validators.required])
  });
  pushItem():void{
    this.complementary.push(this.complementaryForm.value);
    this.getUserInfoService.pushComplementary(this.complementary)
  }
  deleteItem(item:any){
    for(let i = 0;i<this.complementary.length;i++){
      if(this.complementary[i].place === item.place){
        this.complementary.splice(i,1);
      }
    }
  }
  get f(){return this.complementaryForm.controls}
  ngOnInit(): void {
  }

}
