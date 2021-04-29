import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {
  academicInfo:any = []
  academicForm = new FormGroup({
    place:new FormControl("",[Validators.required]),
    duration:new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
    year:new FormControl("",[Validators.required,Validators.pattern("[0-9]{4}")]),
    title:new FormControl("",[Validators.required])
  });
  constructor() { }
  pushItem():void{
    this.academicInfo.push(this.academicForm.value)
    console.log(this.academicInfo);
  }
  get f(){return this.academicForm.controls}
  ngOnInit(): void {
  }

}
