import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public todoitem = '';
  public userArray: any = [];
  // public user: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  addtodo() {
    let userDetails = { todoitem: this.todoitem };
    this.userArray.push(userDetails);
    console.log(this.userArray);
  }

  delete(id:number) {
    this.userArray = this.userArray.filter((user:any, index:any)=>index!=id);
  }

  // getUser(id:any) {
  //   this.user = this.userArray.find((user:any, index:any)=>index!=id);
  // }

  // edit(id:number) {
  //   // let editDetails = { firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password };
  //   // this.userArray[id] (editDetails);
  // }
}
