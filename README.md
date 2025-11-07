MyReads 📚

A React app to organize books into shelves and search for new titles. Built as part of the Udacity React Nanodegree.

Overview

Users can:

View books in three shelves — Currently Reading, Want to Read, and Read

Move books between shelves

Search books in my library dynamically

Search for new books using the plus sign and assign them to shelves

See all data persist across refreshes

Installation

Requirements: Node ≥17, npm ≥9

# Install dependencies
npm install

# Start development server
npm start


It will automatically open a link for you on [localhost](http://localhost:3000/).

Project Structure
src/
├── App.js              # Routes & global state
├── BooksAPI.js         # API helper
├── components/         # BookItem, BooksSection, ListBooks
├── pages/              # Search page
└── App.css             # Styling

Scripts
Command	        Description
npm start	    Runs the app locally
npm run build	Builds for production
npm test	    Runs tests
Notes

Three shelves appear on the main page; “None” books are excluded.

Search handles missing data and invalid queries gracefully.

Routes: / for main, /search for search.