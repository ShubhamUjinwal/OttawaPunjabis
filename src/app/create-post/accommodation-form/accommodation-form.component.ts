import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss']
})
export class AccommodationFormComponent {

  constructor(private taskService: TaskService) {}

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
    const data = this.accommodationData
    this.taskService.createAccommodationPost(data).subscribe((response => {
      console.log(response)
    }))

    this.clearAccommodationState();
  }

  clearAccommodationState() {
    this.accommodationData = {}
  }
}
