import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  dateInitModel!: NgbDateStruct; //for bootstrap datepicker
  dateFinishModel!: NgbDateStruct; //for bootstrap datepicker
  experiences:any = [];
  experiencesForm = new FormGroup({
    company:new FormControl(""),
    job:new FormControl(""),
    dateInit:new FormControl(""),
    dateFinish: new FormControl("")
  });
  pushItem():void{
    this.experiences.push(this.experiencesForm.value)
    console.log(this.experiences)
  }
  ngOnInit(): void {
  }

}
