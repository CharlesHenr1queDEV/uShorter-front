import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ushorter-front';

  constructor(public dialog: MatDialog) {}

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: { message: 'Ocorreu um erro ao processar a sua solicitação.' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
