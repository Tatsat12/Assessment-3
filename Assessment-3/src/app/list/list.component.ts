import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employee!: FormGroup;
  formValue: any;
  heroes: {
    id: number;
    FirstName: string;
    LastName: string;
    email: string;
    Address: string;
    ContactNumber: number;
  }[] = [];
  searchEmployee:string=''
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.employee = this.formbuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Department: ['', Validators.required],
      Address: ['', Validators.required],
      ContactNumber: ['', Validators.required],
      Description: ['', Validators.required],
      Status: ['', Validators.required],
    });
    this.getEmployee();
  }

  getEmployee() {
    this.api.getData().subscribe((response: any) => {
      this.heroes = response;
      console.log(this.heroes);
    });
  }
  addEmployee(form: any) {
    console.log("hhh")
    this.postEmployee(form.value);
    form.reset();
  }
  postEmployee(data: any) {
    this.api.postData(data).subscribe((response: any) => {
      
    });
    this.getEmployee();
  }
  delete(id: number) {
    this.api.deleteData(id).subscribe((response) => {
      this.getEmployee();
    });
  }
}

function matchPassword(): void {
  const pw1: HTMLInputElement | null = document.getElementById("pswd1") as HTMLInputElement;
  const pw2: HTMLInputElement | null = document.getElementById("pswd2") as HTMLInputElement;

  if (pw1?.value !== pw2?.value) {
    alert("Passwords did not match");
  } else {
    alert("Matched!!");
  }
}

