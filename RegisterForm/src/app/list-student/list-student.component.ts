import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/Student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: any;

  constructor(private studentservices: StudentService, private router:Router) {  }

  ngOnInit() {
    this.loaddata();
  }
  loaddata(){
    this.studentservices.getData().subscribe(res => {
      this.students = res;
    });
    /*this.studentservices.getData().subscribe(res => {
      console.log(res);
    })*/
  }

  edit(studentid: string) {
    this.router.navigate(['/edit/' + studentid]);
  }

  delete(studentid: number){
    var result = confirm('are you sure?');
    if(result) {
      this.studentservices.delete(studentid).subscribe(res => {
        this.router.navigate(['list-student']);
      })
    }
  }

  

}
