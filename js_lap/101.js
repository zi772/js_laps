const bookInventory = [
    {
      id: 1,
      title: 'Start with why',
      author: 'Simon Sinek',
      price: 80.0,
      quantity: 13,
    },
    {
      id: 2,
      title: 'But how do it know',
      author: 'J. Clark Scott',
      price: 59.9,
      quantity: 22,
    },
    {
      id: 3,
      title: 'Clean Code',
      author: 'Robert Cecil Martin',
      price: 50.0,
      quantity: 5,
    },
    {
      id: 4,
      title: 'Zero to One',
      author: 'Peter Thiel',
      price: 45.0,
      quantity: 12,
    },
    {
      id: 5,
      title: 'You dont know JS',
      author: 'Kyle Simpson',
      price: 39.9,
      quantity: 9,
    },
  ];
  
  function getBookTitleByID(bookID) {
    const bookIndex = bookID - 1;
    console.log(`Book ID = ${bookInventory[bookIndex].id}  Book title : (${bookInventory[bookIndex].title}) and the author is ${bookInventory[bookIndex].author}`);
  }
  
  function getBookInfo(inputString) {
    for (let i = 0; i < bookInventory.length; i++) {
      if (bookInventory[i].title.includes(inputString) || bookInventory[i].author.includes(inputString)) {
        console.log(`Book ID = ${bookInventory[i].id}  Book title : (${bookInventory[i].title}) and the author is ${bookInventory[i].author}`);
      }
    }
  }
  
  function checkBookAvailability(bookTitle) {
    for (let i = 0; i < bookInventory.length; i++) {
      if (bookInventory[i].title === bookTitle && bookInventory[i].quantity > 0) {
        console.log(`(${bookTitle}) is available`);
        return true;
      }
    }
    console.log(`(${bookTitle}) is not available`);
    return false;
  }
  
  function sellBook(bookTitle, quantity, customerWallet) {
    const bookIndex = bookInventory.findIndex(book => book.title === bookTitle);
    if (bookIndex !== -1 && bookInventory[bookIndex].price * quantity <= customerWallet && bookInventory[bookIndex].quantity >= quantity) {
      bookInventory[bookIndex].quantity -= quantity;
      console.log(`Sold book: (${bookTitle}) Quantity: (${quantity}) new Quantity = ${bookInventory[bookIndex].quantity}`);
      return true;
    } else if (bookIndex === -1) {
      console.log(`Book (${bookTitle}) not found in inventory`);
    } else if (bookInventory[bookIndex].price * quantity > customerWallet) {
      console.log(`Insufficient funds to buy (${quantity}) copy/copies of (${bookTitle})`);
    } else if (bookInventory[bookIndex].quantity < quantity) {
      console.log(`Not enough copies of (${bookTitle}) in stock, available quantity: ${bookInventory[bookIndex].quantity}`);
    }
    return false;
  }
  
  console.log(bookInventory);
  
  sellBook('But how do it know', 2, 60);
  
  getBookTitleByID(2);
  
  getBookInfo('Zero to One');
  
  checkBookAvailability('Kyle Simpson');