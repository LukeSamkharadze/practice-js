var Books = [
  {
    author: 'Bill',
    title: 'The Road Ahead',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10)
  },
  {
    author: 'Steve',
    title: 'Walter Isaacson',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5)
  },
  {
    author: 'Jhon',
    title: 'The Hunger Games',
    haveRead: false,
    dateOfRead: NaN
  }
];

function readingStatus(books) {
  books.forEach((o) => console.log(`${o.author} have${o.haveRead ? ` read ${o.title} book` : `n't read ${o.title} book yet`}`));
}

readingStatus(Books);