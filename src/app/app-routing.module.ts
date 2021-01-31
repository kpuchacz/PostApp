import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PostsListComponent} from './component/posts-list/posts-list.component';
import {AboutComponent} from './component/about/about.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [
  HomeComponent,
  AboutComponent,
  PostsListComponent,
  PageNotFoundComponent
];


