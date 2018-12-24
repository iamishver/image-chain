import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: 'confirmation-dialog.component.html',
})

export class ConfirmationDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    }

    onConfirmClick(): void {
        this.dialogRef.close(true);
    }

}
