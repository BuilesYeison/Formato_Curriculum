import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {GetuserinfoService} from '../getuserinfo.service'

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {
  academicInfo:any = [] //all academic info 
  getUserInfoService = new GetuserinfoService;
  academicForm = new FormGroup({
    place:new FormControl("",[Validators.required]),
    duration:new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),//only numbers
    year:new FormControl("",[Validators.required,Validators.pattern("[0-9]{4}")]),//only four numbers
    title:new FormControl("",[Validators.required])
  });
  constructor() { }
  pushItem():void{
    this.academicInfo.push(this.academicForm.value);//push an object when the submit button is pressed
    this.getUserInfoService.pushAcademicInfo(this.academicInfo)//save all data to the service
  }
  deleteItem(item:any):void{//delete item when char x is pressed in the header
    for(let i = 0;i<this.academicInfo.length;i++){
      if(this.academicInfo[i].title === item.title){//get the object that the title is equal to selected item that will delete
        this.academicInfo.splice(i,1);
      }
    }
  }
  get f(){return this.academicForm.controls} //get the states of controls
  ngOnInit(): void {
  }

}
