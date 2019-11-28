import { Component, OnInit, Inject } from '@angular/core';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  address:String;

  constructor( @Inject(LOCAL_STORAGE) private storage:WebStorageService, private router:Router ) { }

  ngOnInit() {

    if(this.storage.get("uname")=="Akshay")
    {
      this.address="Calicut";

    }
    else if(this.storage.get("uname")=="Diyab")
    {
      this.address="Palakkad";
    }
    else
    {
      this.router.navigate(['']);     //this navigate we r providing the path specified for the specific compoenent in app-routing.module.ts
    }
  }

  onOut()
  {
    this.storage.remove("uname");   //"uname" is the value set to the storage..so here it removes the uname, indirectly deleting uname, deleting  the value in "uname" for eg:AKSHAY, DIYAB

    this.router.navigate(['']);
    alert("Logout Success");
  }

}
