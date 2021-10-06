import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsLeftComponent } from './news-left/news-left.component';
import { NewsRightComponent } from './news-right/news-right.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: "",
    component: NewsLeftComponent
  },
  {
    path: "news/:id",
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
