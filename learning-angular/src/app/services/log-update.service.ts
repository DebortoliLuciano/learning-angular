import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, private _snackBar: MatSnackBar) {
    updates.available.subscribe(event => {
      this.openSnackBar('An update is available');
    });
    updates.activated.subscribe(event => {
      this.openSnackBar('An update has been applied');
    });
  }
  openSnackBar(message: string): void{
    this._snackBar.open(message);
  }
}
