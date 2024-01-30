import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../../servicios/backend.service';
import { Servicio } from '../../interfaces/servicio';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent implements OnInit {

  address!: string;
  description!: string;
  img_icon!: string;

  constructor(public dialogRef: MatDialogRef<DetailsComponent>,
              private backendService: BackendService,
              @Inject(MAT_DIALOG_DATA) public data: Servicio
              ) { }

  ngOnInit(): void {
    this.servicioPorId();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }

  servicioPorId(){
    console.log(this.data)
    this.backendService.getObjetoPorId(this.data.token).subscribe({
      next: (data)=> {
        this.address = data.address;
        this.description = data.description;
        this.img_icon = this.img_icon;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
