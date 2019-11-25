import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'myFirstAngular123';
  temp="AKSHAY";
  months=["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  isavailable=false;
  a=10;
  b=12;
  name="Your Name";

  myClickFunction(event)
  {
    alert("Button Clicked");
    console.log(event);
  }

}
