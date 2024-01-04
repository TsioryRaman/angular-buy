import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  userEmail:string = 'Tsiory';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }
}
