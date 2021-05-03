import { Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import {GetuserinfoService} from './getuserinfo.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  model!: NgbDateStruct; //for bootstrap datepicker
  username:string =""
  userInfoService= new GetuserinfoService
  userInfoForm=new FormGroup({//reactive form
    name:new FormControl("",[Validators.required,Validators.pattern('[A-Za-z ]*')]),//only words with spaces
    ID:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.maxLength(10),Validators.minLength(5)]),
    cargo:new FormControl("", [Validators.required]),
    TP:new FormControl(""),
    date:new FormControl(""),
    dateUpdate:new FormControl("")
  });
  sendData(){
    return console.log(this.userInfoService.certificates)
  }
  get f(){
    return this.userInfoForm.controls//init the control to get their states
  }
  getUsername(){
    //return the first name the user introduce!
    this.username=this.userInfoForm.value.name.split(" ")[0]//get the first name as username
    return this.username
  }
  constructor(){}

  ngOnInit(): void {
  }

}
