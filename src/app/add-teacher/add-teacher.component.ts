import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  user = new User();

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveTeacher(){
    console.log('Current user is',this.user);

    this.firestore
    .collection('users')
    .add(this.user.toJSon())
    .then((result: any) => {
      console.log('Adding user finished', result)
    });
  }

}
