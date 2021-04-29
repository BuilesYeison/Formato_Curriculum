import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { CertificacionesComponent } from './form/certificaciones/certificaciones.component';
import { AcademicComponent } from './form/academic/academic.component';
import { ComplementaryComponent } from './form/complementary/complementary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CertificacionesComponent,
    AcademicComponent,
    ComplementaryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
