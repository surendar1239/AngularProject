import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,MatRadioModule,
  MatIconModule, MatCardModule, MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
   
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
    
  ]
})
export class MaterialModule { }
