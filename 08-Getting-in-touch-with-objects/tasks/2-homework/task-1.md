# Task 1

Write a 'readingStatus(books)' function to display the reading status of the following books.

- Use array iteration
- Log each of them separately

```javascript
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
       title:  'The Hunger Games', 
       haveRead: false,
       dateOfRead: NaN
   }
];
```

Result should be:
    'Bill have read The Road Ahead book'
    'Steve have read Walter Isaacson book'
    'Jhon haven't read The Hunger Games book yet'
