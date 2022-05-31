import Storage from './storage.js';

export default class Interface {
  static displayBooks() {
    const books = Storage.getBook();
    books.forEach((book) => {
      Interface.updateBookList(book);
    });
  }

  static updateBookList(book) {
    const list = document.querySelector('#lists');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>by</td>
      <td>${book.author}</td>
      <button class= 'delete' >Remove</button>
      `;
    list.appendChild(row);
  }

  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearInputs() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}
