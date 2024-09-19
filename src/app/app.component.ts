import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { CompanyAddressComponent } from "./company-address/company-address.component";
import { NgModel } from '@angular/forms';
import { IndustryTypeComponent } from './industry-type/industry-type.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, InputFieldComponent, CompanyAddressComponent,IndustryTypeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recruiter-reg-form';
}
