import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordPressService } from '../word-press.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  categoryId: number;
  posts: any = [];

  constructor(public router: Router, public actRoute: ActivatedRoute, public wordpress: WordPressService) {
    this.categoryId = this.actRoute.snapshot.params['categoryId'];
  }

  ngOnInit() {
    this.wordpress.retrievePostsInCategory(this.categoryId).subscribe(results => {
      this.posts = results;
    });
  }

  openPost(title, content) {
    this.router.navigate(['/post', {
      postTitle: title,
      postContent: content
    }]);
  }

}
