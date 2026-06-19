use bookstore

db.books.drop();
db.books.insertMany([
    {
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "category": "Programming",
        "price": 35,
        "in_stock": true,
        "published_year": 2008,
        "rating": 4.8
        }
    ])

// task 1 is ai generated
db.books.insertMany([
    // --- PROGRAMMING ---
    { title: "The Clean Coder", author: "Robert C. Martin", category: "Programming", price: 32, in_stock: true, published_year: 2011, rating: 4.6 },
    { title: "Clean Architecture", author: "Robert C. Martin", category: "Programming", price: 42, in_stock: true, published_year: 2017, rating: 4.7 },
    { title: "Refactoring", author: "Martin Fowler", category: "Programming", price: 55, in_stock: true, published_year: 2018, rating: 4.9 },
    { title: "Patterns of Enterprise Application Architecture", author: "Martin Fowler", category: "Programming", price: 60, in_stock: true, published_year: 2002, rating: 4.5 },
    { title: "Modern JavaScript Deep Dive", author: "Jane Doe", category: "Programming", price: 45, in_stock: true, published_year: 2021, rating: 4.7 },
    { title: "Python Machine Learning", author: "John Smith", category: "Programming", price: 48, in_stock: false, published_year: 2020, rating: 4.8 },
    { title: "The Pragmatic Programmer", author: "David Thomas", category: "Programming", price: 40, in_stock: true, published_year: 1999, rating: 4.9 },
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", category: "Programming", price: 44, in_stock: true, published_year: 2017, rating: 4.9 },
    { title: "Rust Programming 2023", author: "Alice Coder", category: "Programming", price: 38, in_stock: true, published_year: 2023, rating: 4.4 },
    { title: "Fullstack React", author: "Bob Builder", category: "Programming", price: 50, in_stock: false, published_year: 2022, rating: 4.6 },

    // --- SCIENCE FICTION ---
    { title: "Dune", author: "Frank Herbert", category: "Science Fiction", price: 20, in_stock: true, published_year: 1965, rating: 4.8 },
    { title: "Foundation", author: "Isaac Asimov", category: "Science Fiction", price: 18, in_stock: true, published_year: 1951, rating: 4.7 },
    { title: "Neuromancer", author: "William Gibson", category: "Science Fiction", price: 22, in_stock: false, published_year: 1984, rating: 4.5 },
    { title: "The Martian", author: "Andy Weir", category: "Science Fiction", price: 25, in_stock: true, published_year: 2011, rating: 4.8 },
    { title: "Project Hail Mary", author: "Andy Weir", category: "Science Fiction", price: 30, in_stock: true, published_year: 2021, rating: 4.9 },

    // --- BUSINESS ---
    { title: "Start with Why", author: "Simon Sinek", category: "Business", price: 24, in_stock: true, published_year: 2009, rating: 4.6 },
    { title: "Leaders Eat Last", author: "Simon Sinek", category: "Business", price: 26, in_stock: true, published_year: 2014, rating: 4.5 },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Business", price: 30, in_stock: false, published_year: 2011, rating: 4.7 },
    { title: "Atomic Habits", author: "James Clear", category: "Business", price: 28, in_stock: true, published_year: 2018, rating: 4.8 },
    { title: "Good to Great", author: "Jim Collins", category: "Business", price: 25, in_stock: true, published_year: 2001, rating: 4.4 },

    // --- HISTORY ---
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History", price: 35, in_stock: true, published_year: 2011, rating: 4.8 },
    { title: "Homo Deus", author: "Yuval Noah Harari", category: "History", price: 32, in_stock: true, published_year: 2015, rating: 4.6 },
    { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", category: "History", price: 30, in_stock: false, published_year: 2018, rating: 4.5 },
    { title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "History", price: 28, in_stock: true, published_year: 1997, rating: 4.3 },
    { title: "The Wright Brothers", author: "David McCullough", category: "History", price: 25, in_stock: true, published_year: 2015, rating: 4.7 },

    // --- FANTASY ---
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", price: 22, in_stock: true, published_year: 1937, rating: 4.9 },
    { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", category: "Fantasy", price: 25, in_stock: true, published_year: 1954, rating: 4.9 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Fantasy", price: 20, in_stock: true, published_year: 1997, rating: 4.8 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", category: "Fantasy", price: 29, in_stock: true, published_year: 2007, rating: 4.7 }
    ])

// task2

db.books.insertMany([
    {
        title: "Suffering from bugs in your sql scirpts",
        author: "Aniia",
        category: "Programming",
        price: 10000,
        in_stock: true,
        published_year: 2026,
        rating: 4.9
    },
    {
        title: "Suffering from bugs in your python scirpts",
        author: "Aniia",
        category: "Programming",
        price: 300,
        in_stock: false,
        published_year: 2024,
        rating: 3.9
    },
    {
        title: "Suffering from bugs in your C#",
        author: "Aniia",
        category: "Programming",
        price: 450,
        in_stock: true,
        published_year: 2026,
        rating: 1.5
    },
    {
        title: "Suffering from bugs in your bash scirpts",
        author: "Aniia",
        category: "Programming",
        price: 900,
        in_stock: false,
        published_year: 2025,
        rating: 4.9
    },
    {
        title: "Suffering from bugs in your life scirpts",
        author: "Aniia",
        category: "History",
        price: 1,
        in_stock: true,
        published_year: 2026,
        rating: 3.7
    }
])


//    Find all books in the "Programming" category.
db.books.find({category: "Programming"});

//    Find books published after 2015.
db.books.find({published_year: {$gt : 2015}});

//    Find books priced above $40.
db.books.find({price: {$gt : 40}});

//    Find books currently in stock.
db.books.find({in_stock: true});

//    Find books written by a specific author.
var author = "Aniia";
db.books.find({author: author});

//    Find books with a rating greater than 4.5.

db.books.find({rating: {$gt : 4.5}});

// update

db.books.updateOne({title: "Suffering from bugs in your C#"}, {$set: {rating: 2.1}});
db.books.findOne({title: "Suffering from bugs in your C#"});

db.books.updateOne({title: "Python Machine Learning"}, {$set: {in_stock: true}});
db.books.findOne({title: "Python Machine Learning"});

db.books.updateOne({title: "The Fellowship of the Ring"}, {$set: {price: 300}});
db.books.findOne({title: "The Fellowship of the Ring"});

// delete
db.books.deleteOne({title: "Sapiens"})
db.books.findOne({title: "Sapiens"})
db.books.deleteOne({title: "Harry Potter and the Sorcerer's Stone"})
db.books.findOne({title: "Harry Potter and the Sorcerer's Stone"})

// Task 3

//Average book price per category. Number of books per category. Average rating per category

db.books.aggregate([
    {
        $group: {
            _id: "$category",
            average_price: {$avg: "$price"},
            books_count: {$sum: 1},
            average_rating: {$avg: "$rating"}
        }
    },
    {
        $set: {
            average_price: { $round: ["$average_price", 2] },
            average_rating: { $round: ["$average_rating", 1] }
            }
    }
]);

// Top 5 most expensive books.

db.books.aggregate([
{
    $sort: { price: -1 }
    },
{
    $limit: 5
    }
]);
