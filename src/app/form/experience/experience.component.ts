import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import {GetuserinfoService} from '../getuserinfo.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  dateInitModel!: NgbDateStruct; //for bootstrap datepicker
  dateFinishModel!: NgbDateStruct; //for bootstrap datepicker
  experiences:any = [];
  getUserInfoService = new GetuserinfoService;
  experiencesForm = new FormGroup({
    company:new FormControl("",[Validators.required]),
    job:new FormControl("",[Validators.required]),
    dateInit:new FormControl("",[Validators.required]),
    dateFinish: new FormControl("",[Validators.required])
  });
  pushItem():void{
    this.experiences.push(this.experiencesForm.value);
    this.getUserInfoService.pushExperience(this.experiences);
  }
  deleteItem(item:any){
    for(let i = 0; i<this.experiences.length;i++){
      if(this.experiences[i].company === item.company){
        this.experiences.splice(i,1);
      }
    }
  }
  get f(){return this.experiencesForm.controls}
  ngOnInit(): void {
  }

}
