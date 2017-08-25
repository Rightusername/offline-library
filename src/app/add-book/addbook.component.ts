import { Component } from '@angular/core';
import { BooksService } from "../books.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'add-book',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.less']
})
export class AddBookComponent {

    bookName;
    bookAuthor;
    selectedCategory;
    
    nameFormControl = new FormControl('', [ Validators.required ] );

    constructor( private booksService: BooksService ){

    }

    test(){
        console.log(this.selectedCategory);
    }

    addBook(){
       this.booksService.addBook(this.bookName, this.bookAuthor, this.selectedCategory);
    }

}
