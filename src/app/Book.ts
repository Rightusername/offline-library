export class Book{
    author: String;
    category: String;
    name: String;
    favorite: Boolean = false;

    
    constructor(name, author, category){
        this.name = name;
        this.category = category;
        this.author = author;
    }

    toggleFavorite(){
        this.favorite = !this.favorite;
    }


}