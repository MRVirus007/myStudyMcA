import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  title: any;
  content: any;

  constructor(public router: Router, public actRoute: ActivatedRoute) {
    this.title = this.actRoute.snapshot.params['postTitle'];
    this.content = this.actRoute.snapshot.params['postContent'];

  }

  ngOnInit() {
  }

}
