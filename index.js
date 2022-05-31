/* eslint max-classes-per-file: ["error", 3] */
import  Storage  from "./modules/storage.js";
import  Interface  from "./modules/books.js";


class MyBooks {
  constructor(_title, _author) {
    this.title = _title;
    this.author = _author;
  }
}

document.addEventListener('DOMContentLoaded', Interface.displayBooks());
document.querySelector('#myform').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = new MyBooks(title, author);
  Interface.updateBookList(book);
  Storage.addBook(book);
  Interface.clearInputs();
});

const remove = document.querySelector('#lists');
remove.addEventListener('click', (e) => {
  const title = e.target.previousElementSibling.previousElementSibling
    .previousElementSibling.innerText;
  const author = e.target.previousElementSibling.innerText;
  Storage.removeBook(title, author);
  Interface.removeBook(e.target);
});

document.querySelectorAll('.nav').forEach((nav) => {
  nav.addEventListener('click', (e) => {
    document.querySelectorAll('.nav').forEach((nav2) => nav2.classList.remove('activelink'));
    e.preventDefault();
    e.target.classList.add('activelink');
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('active');
      section.classList.add('hidden');
    });
    document.querySelector(e.target.getAttribute('href')).classList.remove('hidden');
    document.querySelector(e.target.getAttribute('href')).classList.add('active');
  });
});

const myDate = () => {
  const date = new Date();
  const options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const [month, time] = [
    date.toLocaleDateString(undefined, options),
    date.toLocaleTimeString().toLocaleLowerCase(),
  ];
  document.getElementById('currenttime').innerHTML = `${month}, ${time}`;
};
myDate();
setInterval(myDate, 1000);


