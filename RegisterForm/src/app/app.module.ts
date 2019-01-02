import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { routing } from './routing'
import { MaterialModule } from './material/material.module';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentService } from './student.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    ListStudentComponent,
    EditStudentComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
