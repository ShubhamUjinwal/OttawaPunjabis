import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-rideshare-list',
  templateUrl: './rideshare-list.component.html',
  styleUrls: ['./rideshare-list.component.scss']
})
export class RideshareListComponent implements OnInit {

  public rideshare_posts: any = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.taskService
      .fetchPosts()
      .subscribe((response: any) => {
        this.rideshare_posts = response
      })
  }
}
