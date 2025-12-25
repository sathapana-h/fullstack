const book = {
    title: "1984 ",
    author : "George Orwell",
    isAvailable: true,
    checOut : function(){
        this.isAvailable = false;
    },
    checIn: function(){
        this.isAvailable = true;
    }
};


console.log(book.isAvailable);
book.checOut();
console.log(book.isAvailable);
book.checIn();
console.log(book.isAvailable);