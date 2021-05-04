import { Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  model!: NgbDateStruct; //for bootstrap datepicker
  username:string ="";
  userInfo:any = [];
  experiences:any = [];
  certificates:any = [];
  complementary:any = [];
  academicInfo:any = [];
  userInfoForm=new FormGroup({//reactive form
    name:new FormControl("",[Validators.required,Validators.pattern('[A-Za-z ]*')]),//only words with spaces
    ID:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.maxLength(10),Validators.minLength(5)]),
    cargo:new FormControl("", [Validators.required]),
    TP:new FormControl(""),
    date:new FormControl(""),
    dateUpdate:new FormControl("")
  });
  pushExperienceData(data:any):void{this.experiences.push(data)}//get from child components user info
  pushCertData(data:any):void{this.certificates.push(data)}
  pushCompleData(data:any):void{this.complementary.push(data)}
  pushAcademicData(data:any):void{this.academicInfo.push(data)}
  disabledButton(){
    //verify if required forms are filled; if ot disabled the send button
    if(this.pushCertData.length===0 || this.complementary.length===0 || this.academicInfo.length ===0){
      return true
    }else{
      return false
    }
  }
  sendData(){
    //return an array with all info getted from user
    this.userInfo.push(this.userInfoForm.value);
    this.userInfo["certificates"]=this.certificates;
    this.userInfo["academic"]=this.academicInfo;
    this.userInfo["complementary"]=this.complementary;
    this.userInfo["experiences"]=this.experiences;
    return this.userInfo
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
