import { Component, OnInit } from '@angular/core';
import { ClickCounterService } from '../../services/click-counter.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.scss'
})
export class ClickCounterComponent implements OnInit {

  shortUrl:string = '';
  clickQuantity:number = 0;

  constructor(private clickCounterService: ClickCounterService, private route: ActivatedRoute, private dialog: MatDialog){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.shortUrl = params['shortUrl'];
    });

    if(this.shortUrl != '' && this.shortUrl != null){
      this.findQuantityClick();
    }
  }

  findQuantityClick(){
    this.clickCounterService.findQuantityClick(this.shortUrl).subscribe(
      (response) => {
        this.clickQuantity=response;
      },
      (error) => {
        if(error.status == 0){
          let errorMen = 'Erro de conexão com o servidor';
          this.openErrorDialog(errorMen, '500');
        }else{
          this.openErrorDialog(error.error, error.status);
        }
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
