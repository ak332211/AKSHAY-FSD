import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

import { GetusersService } from '../getusers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private serviceObject:GetusersService) { }

  ngOnInit() {
  }

  userData;

  getUsers(){
    

    // this.http.get('https://jsonplaceholder.typicode.com/users')
    this.serviceObject.getUserService().
    subscribe( (users)=>{
        this.userData=users;
         console.log(this.userData)
    })

  }
 
}
