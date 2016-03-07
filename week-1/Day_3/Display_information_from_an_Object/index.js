function displayInformation() {
     // var library is defined, use it to print the information
    library.forEach(function(book) {
        if (book.readingStatus) {
            console.log("Already read '" + book.title + "' by " + book.author + ".");
        } else {
            console.log("You still need to read '" + book.title + "' by " + book.author + ".");
        }
    });
}
