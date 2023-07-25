import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss']
})
export class AccommodationFormComponent {

  accommodationData: any = {
    post_type: '',
    date: '',
    area: '',
    type: '',
    setting: '',
    price: '',
    contact_type: '',
    username: ''
  }

  onSubmit() {
    console.log('Form submitted with data:', this.accommodationData);
    // Add your form submission logic here (e.g., send data to the server)
  }
}
