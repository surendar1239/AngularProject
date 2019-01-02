import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  studentForm: FormGroup;

  genders = new Array<string>();

  submitted = false;

  constructor(private studentservice:StudentService, private formBuilder: FormBuilder,
              private router: Router) {
    this.genders.push("male","female");
   }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      studentid: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    });
  } 

  get f() { return this.studentForm.controls; }

 onSubmit(){
      this.studentservice.createUser(this.studentForm.value).subscribe
      ( res => {
        this.router.navigate(['list-student']);
      })
    }
   
 }
  
