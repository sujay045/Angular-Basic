import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp',
  standalone: false,
  templateUrl: './emp.html',
  styleUrl: './emp.css',
})
export class Emp implements OnInit{

  employees: any=[];

  constructor(private empService: EmpService) { }

  ngOnInit(): void {
    this.employees=this.empService.getEmpList();
    alert(JSON.stringify(this.employees));
  }

}
