import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  user = new User();

  constructor(public dialog: MatDialog) {
     
   }

  ngOnInit(): void {
  }

  addTeacher() {
    this.dialog.open(AddTeacherComponent);
  }

}
