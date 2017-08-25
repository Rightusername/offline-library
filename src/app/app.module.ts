import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import 'hammerjs';

import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavBarComponent } from "./navbar/navbar.component";
import { BooksListComponent } from "./books-list/bookslist.component";
import { NotificationService } from "./notification.service";
import { BooksService } from "./books.service";
import { AddBookComponent } from "./add-book/addbook.component";
import { EditBookComponent } from "./edit-book/editbook.component";
import { DialogsService } from "./dialogs.service";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddBookComponent,
    EditBookComponent
  ],
  providers: [ NotificationService, BooksService, DialogsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
