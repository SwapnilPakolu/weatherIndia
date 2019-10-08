import { NgModule } from "@angular/core";
import {MatToolbarModule,MatIconModule,MatCardModule,MatSortModule,MatPaginatorModule} from '@angular/material';
import { MatTableModule} from '@angular/material/table';
//import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    
    //MatFormFieldModule,
    //MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    //MatSnackBarModule,
    //MatDialogModule
  ],
  exports: [
    
    //MatFormFieldModule,
    //MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    //MatSnackBarModule,
    //MatDialogModule
  ]
})
export class MaterialModule {}