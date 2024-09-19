import { Component } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-address',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './company-address.component.html',
  styleUrls: ['./company-address.component.css']
})
export class CompanyAddressComponent {
  selectedCountry: string ="1";

  isBangladeshSelected(): boolean {
    return this.selectedCountry === '1'; 
  }

}
