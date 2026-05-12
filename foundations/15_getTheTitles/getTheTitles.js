const books = [
	{
		title: 'Book',
		author: 'Name',
	},
	{
		title: 'Book2',
		author: 'Name2',
	},
];

const getTheTitles = function (arr) {
	const bookTitles = arr.map(book => book.title);
	return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

console.log(getTheTitles(books));
