import { Component } from '@angular/core';
import {
  GenerateUrlService,
  OriginalUrlDTO,
  UrlMapping,
} from '../../services/generate-url.service';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrl: './shortener.component.scss',
})
export class ShortenerComponent {
  inputUrl: string = '';

  constructor(private generateUrlService: GenerateUrlService, private router: Router, public dialog: MatDialog) {}

  saveUrl() {
    const originalUrlDTO: OriginalUrlDTO = { url: this.inputUrl };
    const language = 'en';

    this.generateUrlService.saveUrlMapping(originalUrlDTO, language).subscribe(
      (response) => {
        this.router.navigate(['/url-shortened'], { 
          queryParams: { 
            originalUrl: response.originalUrl, 
            shortUrl: response.shortUrl 
          } 
        });
      },
      (error) => {
        this.openErrorDialog(error.error, error.status);
      }
    );
  }

  openErrorDialog(messageErro:string, codeError:string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '350px',
      data: { message: messageErro, codeError: codeError}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
