import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { BackendService } from '../../servicios/backend.service';
import { Servicio } from '../../interfaces/servicio';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.sass'
})
export class AvisosComponent implements OnInit {

  data: any;

  constructor(public dialog: MatDialog, private backendService: BackendService){}

  ngOnInit(): void {
    this.listServicio();
  }

  openDialog(e: Servicio){
    const dialogRef = this.dialog.open(DetailsComponent, {
      height: '400px',
      width: '600px',
      data : e
    });
  }

  listServicio(){
    this.backendService.obtenerDatos().subscribe({
      next: (datos) => {
        this.data = datos;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
