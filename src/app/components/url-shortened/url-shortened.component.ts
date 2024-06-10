import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-url-shortened',
  templateUrl: './url-shortened.component.html',
  styleUrl: './url-shortened.component.scss',
})
export class UrlShortenedComponent implements OnInit {
  originalUrl: string = '';
  shortUrl: string = '';
  messageVisible = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  copyToClipboard() {
    const link = this.shortUrl;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        this.messageVisible = true;
        setTimeout(() => {
          this.messageVisible = false;
        }, 2000);
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err);
      });
  }

  findQuantityClick(){
    this.router.navigate(['/click-counter'], { 
      queryParams: { 
        shortUrl: this.shortUrl 
      } 
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.originalUrl = params['originalUrl'];
      this.shortUrl = params['shortUrl'];
    });
  }
}
