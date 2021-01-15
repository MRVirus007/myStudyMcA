import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WordPressService } from '../word-press.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: any;

  constructor(public wordpress: WordPressService, public router: Router) {

  }

  /* ionViewDidLoad() {
     this.wordpress.retrieveCategories().subscribe(
       result => {
         this.categories = result;
         console.log(result);
       });
   } */

  loadCategory(id: number) {
    this.router.navigate(['/category-list', {
      categoryId: id
    }]);
  }

  ngOnInit() {
    this.wordpress.retrieveCategories().subscribe(
      result => {
        this.categories = result;
        console.log(result);
      });
    this.wordpress.retrievePostsInCategory(5).subscribe(res => {
      console.log(res);
    });
  }

}
