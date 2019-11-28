import { Component, OnInit, Inject } from '@angular/core';    //import Inject class also


import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  user: String;
  sessionVal;
  
  
  constructor( @Inject(LOCAL_STORAGE) private storage:WebStorageService , private router:Router ) { }

  ngOnInit() 
  {
  }


  onsubmit()
  {

    if( (this.model.name=="Akshay" && this.model.password=="1234") ||  (this.model.name=="Diyab" && this.model.password=="12345"))
    {
      
      this.storage.set("uname", this.model.name);
      // this.storage.set("pwd", this.model.password);  not safer to store passwords in local storage (due to security issues)

      // alert(this.storage.get("uname"));
      alert("Login Success");
    
      this.router.navigate(['home']);
    }

  }
}
