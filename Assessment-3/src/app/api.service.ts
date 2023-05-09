import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employess } from './list/model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:3000/employeeData');
  }
  postData(data: any) {
    console.log(data);

    const requestBody = {
      FirstName: data.FirstName,
      lastName: data.LastName,
      Email: data.Email,
      Department: data.Department,
      Addrress: data.Address,
      ContactNumber: data.ContactNumber,
      Description: data.Description,
     
    };
    return this.http.post('http://localhost:3000/employeeData', requestBody);
  }
  deleteData(empid: number) {
    return this.http.delete('http://localhost:3000/employeeData/' + empid);
  }
  fetchData(getData:number){
    return this.http.get('http://localhost:3000/employeeData/' + getData)
  }
  udateData(data:any,id:number){
    const requestBody = {
      FirstName: data.FirstName,
      LastName: data.LastName,
      email: data.email,
      Address: data.Address,
      ContactNumber: data.ContactNumber,
      Description: data.Description,

    };
    return this.http.put('http://localhost:3000/employeeData/' + id,requestBody)
  }
}
