import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: 'post', component: AppComponent },
  { path: 'album', component: AlbumComponent },
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
