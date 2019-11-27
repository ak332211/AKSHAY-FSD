import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      // lastName  : ['', Validators.required],
      // email     : ['', [Validators.required, Validators.email],
      // password  : ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.registerForm.controls };    //get implying getter function

  onSubmit() {
    console.log(this.f);
    this.submitted = true;


    if(this.registerForm.invalid) {
      return;
    }

    else{
      alert('SUCESS!' + this.registerForm.get("firstName").value);

    }

    // console.log(this.registerForm.controls.firstName.value);
    // console.log(this.f.firstName.value);
  }
}