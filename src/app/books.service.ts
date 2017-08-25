import { Injectable } from '@angular/core';
import { Book } from './Book'; 
import { Observable } from "rxjs/Observable";
import { NotificationService } from "./notification.service";

@Injectable()
export class BooksService {
    
    
    private data: Observable<Array<Book>>;

    defaultData : Book[] = [new Book('Краска','Ф. Н. Терем','Драма'),
        new Book('Вишня','А. А. Андреев','Драма'),
        new Book('Колеса Мотора','Ф. Е. Время','Фантастика'),
        new Book('Караси','Железов','Детектив')
    ];
    defaultCategories = ['Фентези', 'Детектив', 'Драма', 'Фантастика']
    books : Book[];
    edit;
    
    //filters
    selectedCategory = "all";
    inputValue = '';
    
    constructor( private notification: NotificationService){
        this.getBooks().subscribe((data)=>{
            this.books = data;
            console.log(this.books);
        });
    }

    wishListLength(){
        let l = 0;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].favorite) {
                l++
            }
        }
        return l;
    }

    filter(book){
        console.log(this.selectedCategory)
        if(this.selectedCategory == book.category || this.selectedCategory == 'all'){
            if(this.isMatch(book)){
                return true;
            }
        }
        return false;
    }

    isMatch(book){
        if(!book.author){
            book.author = '';
        }
        var re = new RegExp(this.inputValue.replace(/[*\[|\]\(\)]/ig,''), 'ig');
        if(book.name.match(re) || book.author.match(re)) return true;
        return false;
    }

    categoryBooksAmount(category){
        let amount = 0;
        for (var i = 0; i < this.books.length; i++) {
            if(this.books[i].category == category){
                amount++;
            }
        }
        return amount;
    }


    getBooks() : Observable<Book[]>{
    
        return new Observable(observer=>{
            this.books = JSON.parse( localStorage.getItem('books') ) || this.defaultData;
            observer.next(this.books)
        });        
    }

    getCategories(){
        return this.defaultCategories;
    }


    addBook(name, author, category){
        this.books.push(new Book(name, author, category));
        this.saveBooks();
    }



    toggleFavorite(book){
        book.favorite = !book.favorite;
        this.saveBooks();
        this.notification.show(book.name, (!book.favorite) ? 'Удален из списка желаний' : 'Добавлен в список желаний');
    }

    deleteBook(book){
        this.books.splice(this.books.indexOf(book),1);
        this.saveBooks();
        this.notification.show(book.name, 'Удален');
    }

    // getFiles(){
    //     this.files = JSON.parse( localStorage.getItem('books') ) || [];
    // }

    saveBooks(){
        localStorage.setItem('books', JSON.stringify( this.books) );
    }

}