import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peopleList = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result=>{
        this.peopleList=result;
      },
      error=>{
        console.log(error);
      }
    );
  }

  delete(item) {
    let index = this.peopleList.indexOf(item);
    if (index !== -1) {
      this.peopleList.splice(index, 1);
    }
    this.userService.deleteUser(item._id).subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        console.log(error);
      }
    );
  }
}
