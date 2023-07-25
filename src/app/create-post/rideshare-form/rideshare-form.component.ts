import { Component } from '@angular/core';

@Component({
  selector: 'app-rideshare-form',
  templateUrl: './rideshare-form.component.html',
  styleUrls: ['./rideshare-form.component.scss']
})
export class RideshareFormComponent {

  rideshareData: any = {
    post_type: '',
    date: '',
    from: '',
    to: '',
    price: '',
    contact_type: '',
    username: ''
  }

  onSubmit() {
    console.log('Form submitted with data:', this.rideshareData);
    // Add your form submission logic here (e.g., send data to the server)
  }

}
