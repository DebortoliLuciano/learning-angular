import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() newMemeEvent = new EventEmitter<Content>();
  @Output() updateGameEvent = new EventEmitter<string>();
  newMeme: any;
  constructor(private contentService: ContentService, public dialog: MatDialog) {
    this.newMeme = {
      title: '',
      body: '',
      author: '',
      type: 'Bad-Meme'
    };
  }

  ngOnInit(): void {
  }

  openAddMemeDialog(): void{
    const memeDialogRef = this.dialog.open(CreateComponentDialog, {
      width: '300px'
    });
    memeDialogRef.afterClosed().subscribe(newMemeFromDialog => {
      this.newMeme = newMemeFromDialog;
      if (this.newMeme){
        this.addMeme();
      }
    });
  }
  addMeme(): void{
    let newMemeFromServer: Content;
    console.log('Trying to add the meme to the list', this.newMeme);
    this.contentService.addContent(this.newMeme).subscribe(serverMeme => {
      console.log('Added the meme to the list', serverMeme);
      newMemeFromServer = serverMeme;
      this.newMemeEvent.emit(newMemeFromServer);
    });
  }
  updateMeme(): void{
    this.newMeme.id = +this.newMeme.id;
    console.log('Trying to update the meme to the list', this.newMeme);
    this.contentService.updateContent(this.newMeme).subscribe(_ => {
      console.log('Content Updated');
      this.updateGameEvent.emit('Updated meme id should be: ' + this.newMeme.id);
    });
  }

}

@Component({
  selector: 'app-create-component-dialog',
  templateUrl: './create-component-dialog.component.html',
})
export class CreateComponentDialog{
  newMeme: any;
  constructor(public dialogRef: MatDialogRef<CreateComponentDialog>) {
    this.newMeme = {
      title: '',
      body: '',
      author: '',
      type: 'Bad-Meme'
    };
  }
  onNoClick(): void{
    this.dialogRef.close();
  }
}
