import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})
export class JobsFormComponent {

  constructor(private taskService: TaskService) {}

  jobsData: any = {
    post_type: '',
    date: '',
    type: '',
    location: '',
    description: '',
    contact_type: '',
    username: ''
  }

  onSubmit() {
    const data = this.jobsData
    this.taskService.createJobsPost(data).subscribe((response => {
      console.log(response)
    }))

    this.clearJobsState();
  }

  clearJobsState() {
    this.jobsData = {}
  }

}
