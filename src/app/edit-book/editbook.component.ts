import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { BooksService } from "../books.service";


@Component({
  selector: 'edit-book',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.less']
})
export class EditBookComponent {

    nameFormControl = new FormControl('', [ Validators.required ] );

    constructor(private booksService: BooksService){

    }

    edit(){
        this.booksService.saveBooks();
    }

}
