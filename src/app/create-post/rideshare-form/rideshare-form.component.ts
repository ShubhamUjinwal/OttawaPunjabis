import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-rideshare-form',
  templateUrl: './rideshare-form.component.html',
  styleUrls: ['./rideshare-form.component.scss']
})
export class RideshareFormComponent {

  constructor(private taskService: TaskService) {}

  rideshareData: any = {
    post_type: '',
    date: '',
    from: '',
    to: '',
    price: '',
    contact_type: '',
    username: ''
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = this.rideshareData
    this.taskService.createRidesharePost(data).subscribe((response => {
      console.log(response)
    }))

    this.clearRideshareState();
  }

  clearRideshareState() {
    this.rideshareData = {}
  }
}
