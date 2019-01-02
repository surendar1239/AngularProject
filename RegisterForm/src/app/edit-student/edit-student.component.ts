import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studenteditForm: FormGroup;

  constructor(private studentservice:StudentService, private formBuilder: FormBuilder,
              private router: Router, private activatedroute:ActivatedRoute) {  }

  ngOnInit() {

    var studentid = this.activatedroute.snapshot.params.studentid;

    this.studentservice.find(studentid).subscribe(
      res => {
      this.studenteditForm = this.formBuilder.group({
      studentid: res.studentid,
      firstName: res.firstName,
      lastName: res.lastName,
      gender: res.gender,
      email: res.email,
      pass: res.pass
    });
  },
  error => {
    console.log(error);
  });
  } 
  save() {
    this.studentservice.update(this.studenteditForm.value).subscribe
    (res => {
      this.router.navigate(['list-student']);
    })
  }

}
