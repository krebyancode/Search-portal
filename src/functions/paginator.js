const paginator = (people) => {
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(people.length / itemsPerPage);

  const newPeople = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return people.slice(start, start + itemsPerPage);
  });

  return newPeople;
};

export default paginator;
