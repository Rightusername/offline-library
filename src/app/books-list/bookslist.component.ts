import { Component } from '@angular/core';
import { BooksService } from "../books.service";
import { Sort } from "@angular/material/material";
import { DialogsService } from "../dialogs.service";

@Component({
  selector: 'books-list',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.less']
})
export class BooksListComponent {
    sortedData;

    constructor( private booksService: BooksService, private dialogsService: DialogsService){
        this.sortedData = this.booksService.books;
    }

    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    sortData(sort: Sort) {
        const data = this.booksService.books.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            let isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return this.compare(a.name, b.name, isAsc);
                case 'author': return this.compare(a.author, b.author, isAsc);
            }
        });
    }
}
