function getCustomers(customers, countries)
{
  return new Promise((resolve, reject) => {
    customers.forEach(o => { if(!countries.find(oo => o.id === oo.id)) reject(`We don't have information about country for this customer: ${o.name}`)})
    resolve(customers.map(o => Object.assign(o, countries.find(oo => oo.verified && o.verified && oo.id === o.id))));
  });
}

const customers = [
  {
      id: 'A1',
      name: 'Oliver',
      verified: true
  },
  {
      id: 'A2',
      name: 'alex'
  }
];

const countries = [
  {
      id: 'A1',
      country: 'usa'
  },
  {
      id: 'A2',
      country: 'poland'
  }
];

getCustomers(customers, countries)
  .then((customers) => console.log(customers))
  .catch(error => console.log(error))