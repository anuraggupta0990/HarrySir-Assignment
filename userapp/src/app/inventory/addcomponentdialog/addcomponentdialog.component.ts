import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcomponentdialog',
  templateUrl: './addcomponentdialog.component.html',
  styleUrls: ['./addcomponentdialog.component.css']
})
export class AddcomponentdialogComponent {

  newComponentType: string = '';

  @Output() addComponentType = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<AddcomponentdialogComponent>) {}

  onAddClick(): void {
    if (this.newComponentType.trim()) {
      this.addComponentType.emit(this.newComponentType.trim());
      this.dialogRef.close(this.newComponentType.trim()); // Emit the new component type and close dialog
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}