import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { UrlShortenedComponent } from './components/url-shortened/url-shortened.component';
import { ClickCounterComponent } from './components/click-counter/click-counter.component';



const routes: Routes = [
  { path: 'shortener', component: ShortenerComponent },
  { path: 'url-shortened', component: UrlShortenedComponent },
  { path: 'click-counter', component: ClickCounterComponent },
  { path: '', redirectTo: '/shortener', pathMatch: 'full' },
  { path: '**', redirectTo: '/shortener' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
