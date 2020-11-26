var Books = [
  {
    author: 'Bill',
    title: 'The Road Ahead',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: 'Steve',
    title: 'Walter Isaacson',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: 'Jhon',
    title: 'The Hunger Games',
    haveRead: false,
    dateOfRead: NaN,
  }
];

function readingStatus(books) {
  books.forEach(o => Object.defineProperty(o, 'daysAgo', {get: function() { return `${Math.floor((Date.now() - this.dateOfRead) / 86400000)} days ago` }}) )
  books.forEach(o => console.log(`${o.author} have${o.haveRead ? ` read ${o.title} book ${o.daysAgo}` : `n't read ${o.title} book yet`}`));
}

readingStatus(Books);