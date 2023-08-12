import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  public jobs_posts: any = [];
  @Output() jobsPostsIndex = new EventEmitter<any>();

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.getJobPosts();
  }

  getJobPosts() {
    this.taskService
      .fetchJobsPosts()
      .subscribe((response: any) => {
        this.jobs_posts = response
        this.jobsPostsIndex.emit(this.jobs_posts.length)
      })
  }

}
