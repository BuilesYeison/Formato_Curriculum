import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators}from "@angular/forms"

@Component({
  selector: 'app-complementary',
  templateUrl: './complementary.component.html',
  styleUrls: ['./complementary.component.scss']
})
export class ComplementaryComponent implements OnInit {
  complementary:any=[]
  complementaryForm = new FormGroup({
    place:new FormControl("", [Validators.required]),
    duration:new FormControl("", [Validators.required,Validators.pattern("[0-9]*")]),
    year:new FormControl("", [Validators.required, Validators.pattern("[0-9]{4}")]),
    description:new FormControl("", [Validators.required])
  });
  pushItem():void{
    this.complementary.push(this.complementaryForm.value);
  }
  get f(){return this.complementaryForm.controls}
  ngOnInit(): void {
  }

}
