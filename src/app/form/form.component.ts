import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData: any={};
  constructor() { }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.formData);
  }
}
