import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnInit{

  uname : string="Sujay";
  flag1: boolean=true;
  flag2: boolean=false;

  constructor() {}

  ngOnInit(): void {
    
  }

  myfun() : void{
    alert("Hi");
    this.uname="Sachin";
  }

}
