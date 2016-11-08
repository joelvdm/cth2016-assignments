 // import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of books
// https://www.athenaeum.nl/boek/?authortitle=jan-van-der-putten/china-wereldleider-9789046814581
var book1_title = "China Wereldleider";
var book1_author = "Jan van der Putten";
var book1_price = "19.95";
var book1_kind = "Paperback";

// https://www.athenaeum.nl/boek/?authortitle=john-williams/stoner--9789048813834
var book2_title = "Stoner";
var book2_author = "John Williams";
var book2_price = "19.95";
var book2_kind = "Paperback";

// https://www.athenaeum.nl/boek/?authortitle=cornelisse-paulien/en-dan-nog-iets--9789025438036
var book3_title = "En dan nog iets";
var book3_author = "Paulien Cornelisse";
var book3_price = "12.50";
var book3_kind = "Pocket";

// https://www.athenaeum.nl/boek/?authortitle=khalil-gibran-kahlil-gibran/de-profeet--9789062716203
var book4_title = "De Profeet";
var book4_author = "Kahlil Gibran";
var book4_price = "9.95";
var book4_kind = "Paperback";

// https://www.athenaeum.nl/boek/?authortitle=harris-james-a-/hume-9780521837255
var book5_title = "Hume";
var book5_author = "James A. Harris";
var book5_price = "55,50";
var book5_kind = "Hardcover";

// initialise program (aka commander) 
program
  .version('0.0.1')
  .option('-t, --title [value]', 'Title of the book to match', 'empty') // add option --title with default value "empty"
  .option('-a, --author [value]', 'Author of the book to match', 'empty') // add option --author with default value "empty"
  .option('-p, --price [value]', 'Price of the book to match', 'empty') // add option --price with default value "empty"
  .option('-k, --kind [value]', 'Kind of the book to match', 'empty') // add option --kind with default value "empty"
  .parse(process.argv);								

// check what the value of title is regardless of if it matches or not
//console.log(program.title); // this line can be commented out

// match value of input's "title" argument
switch(program.title) 
{
	case book1_title:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_title:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_title:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_title:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_title:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;

}

// check what the value of author is regardless of if it matches or not
// match value of input's "author" argument
switch(program.author)	
{
	case book1_author:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_author:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_author:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_author:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_author:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	
}
// check what the value of price is regardless of if it matches or not
// match value of input's "price" argument 
switch(program.price)	
{
	case book1_price:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;

}
switch(program.price)	
{

	case book2_price:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;

}
switch(program.price)	
{

	case book3_price:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;

}
switch(program.price)	
{

	case book4_price:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;

}
switch(program.price)	
{

	case book5_price:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	
}

// check what the value of kind is regardless of if it matches or not
// match value of input's "kind" argument
 switch(program.kind)	
{
	case book1_kind:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
}

switch(program.kind)	{

	case book2_kind:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
}

switch(program.kind)	{

	case book3_kind:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
}

switch(program.kind)	{

	case book4_kind:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
}

switch(program.kind)	{

	case book5_kind:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;

}