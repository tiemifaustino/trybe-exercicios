// 1 - Observe o código abaixo e faça as alterações necessárias para que ele passe a respeitar o Princípio da Responsabilidade Única (SRP).
// eslint-disable-next-line max-classes-per-file
type Book = {
  book: string;
  author: string;
  genre: string;
}

// Imprime a mensagem resultante da classe ReadingTracker
function progressNotification(message: string): void {
  console.log(message);
}

// Mostra se já leu a quantidade de livros que foram colocados como objetivo
class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }
  
  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      progressNotification('Congratulations! You\'ve reached your reading goal!');
      return;
    }
    progressNotification('There are still some books to go!');
  }
}

// Adiciona e mostra os livros da lista de desejos
class BooksWishList {
  private wishlist: Book[];
  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const readTracker = new ReadingTracker(20); // instancia a classe de leitura de livros com a quantidade de leitura a ser atinginda (20 livros)
readTracker.trackReadings(12); // There are still some books to go! // Adiciona 12 livros lidos na instância criada da classe ReadingTracker (readTracker)
readTracker.trackReadings(9); // Congratulations! You've reached your reading goal!

const wishlist = new BooksWishList({ // instancia uma nova classe de BooksWishList
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia' });

wishlist.addToWishlist({ // adiciona livro a lista de desejos
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller' });

wishlist.showWishlist(); // mostra a lista de desejos
// [
//   { book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' },
//   { book: 'Misery', author: 'Stephen King', genre: 'Thriller' }
// ]