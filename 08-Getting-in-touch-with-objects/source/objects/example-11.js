const data = { type: 1 };

console.log(data && data.type);

const title = data && data.type && data.type.title;

console.log(title);
