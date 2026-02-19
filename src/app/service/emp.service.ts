import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpService {

  constructor() { }

  getEmpList()
  {
    return [
      {"eno": 100, "ename": "Sujay", "salary": 10000},
      {"eno": 101, "ename": "Pranay", "salary": 20000},
      {"eno": 102, "ename": "Soham", "salary": 30000}
    ]
  }
  
}
