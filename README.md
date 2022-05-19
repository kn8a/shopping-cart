# Shopping cart app using React JS

<img src=https://user-images.githubusercontent.com/88045655/169199931-1d8ff400-08e6-4477-8e7d-d89ddc3c4caf.JPG alt="Book Library" width="500">

### Background
This project is written using React JS and is the last project of the React chapter in TheOdinProject.
https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart

Live demo: https://kn8a.github.io/shopping-cart/

### App Functionality

- Import products from JSON.
- Using Router to load different elements.
- Dynamic routing with category and product name.
- Display products page w/ add-to-cart button
- Display product details w/ add-to-cart button
- Cart Qty update on Nav
- Total each item and total all items in Cart.
 
### Where I struggled

 - Getting props to pass through React Router. solved using `<Link>` and wrapping `<Nav>` in `<BrowserRouter>`.
 - Setting the homepage to properly display in gh-pages. Solved with `<BrowserRouter basename="/shopping-cart">`
 - Add-to-cart notification. Solved using React-Toastify.

### What I Learned

 - Greater understanding of React Hooks, specifically `useState` and `useEffect`
 - Greater understanding of functional components and passing functions as props.
 - How to use React Router and its limitations.
 - Greater understanding of `filter` and `map` methods, as well as changing values of object properties inside of an array.
