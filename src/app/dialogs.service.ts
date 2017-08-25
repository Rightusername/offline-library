import { Injectable } from '@angular/core';
import { Book } from './Book'; 
import { Observable } from "rxjs/Observable";
import { NotificationService } from "./notification.service";
import { BooksService } from "./books.service";
import { MdDialog } from "@angular/material";
import { AddBookComponent } from "./add-book/addbook.component";
import { EditBookComponent } from "./edit-book/editbook.component";

@Injectable()
export class DialogsService {

    
    constructor( private booksService: BooksService, public dialog: MdDialog){

    }
    
    addBook() {
        this.dialog.open( AddBookComponent );
    }

    editBook(book) {
        this.booksService.edit = book;
        this.dialog.open( EditBookComponent );
    }
}