import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})
export class JobsFormComponent {

    jobsData: any = {
    post_type: '',
    date: '',
    job_type: '',
    location: '',
    description: '',
    contact_type: '',
    username: ''
  }

  onSubmit() {
    console.log('Form submitted with data:', this.jobsData);
    // Add your form submission logic here (e.g., send data to the server)
  }

}
