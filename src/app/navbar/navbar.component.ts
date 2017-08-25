import { Component } from '@angular/core';
import { BooksService } from "../books.service";
import { DialogsService } from "../dialogs.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavBarComponent {

    constructor(private booksService: BooksService, private dialogsService: DialogsService){

    }


}
