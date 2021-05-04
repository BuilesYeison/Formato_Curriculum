import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms' //reactive forms libraries required

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent implements OnInit {
  certificados:any = []; //will save all certificates
  @Output() pushCertData:EventEmitter<any>=new EventEmitter();
  certificadosForm = new FormGroup({
    certificado:new FormControl("",[Validators.required]),
    year:new FormControl("",[Validators.required,Validators.pattern("[0-9]{4}")])//only four numbers
  });
  pushCertificado():void{//when submit add a new certificate
    this.certificados.push(this.certificadosForm.value);
    this.pushCertData.emit(this.certificadosForm.value);
  }

  deleteItem(item:any):void{//when press x key in the item card delete that item
    for(let i= 0;i<this.certificados.length;i++){
      if(this.certificados[i].certificado === item.certificado){
       this.certificados.splice(i,1)
      }
    }
  }
  get f(){
    return this.certificadosForm.controls
  }
  constructor() { 
  }
  ngOnInit(): void {
  }

}
