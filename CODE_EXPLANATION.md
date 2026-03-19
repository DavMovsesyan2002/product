# Code Explanation

## How the product fetching logic works
When the app is loading, I call fetchProducts inside useEffect so it runs only once.
Inside this function, I first set loading to true, then call getProducts which makes a request to the API using axios. When I get the response, I save the data in the products state.
If something goes wrong, I show an error message using notistack. In the end I always set loading to false.
While loading is true I show skeleton cards and when data is ready, I render the products.

## Why I chose my state management approach
I used useState because the app is small and all the data are handled inside component. There was no need to add something like Redux. I just pass data to child components using props.
If the project was bigger, then I would consider Redux Toolkit.

## How pagination works
First I calculate total pages, how many products I have and how many I show per page.
Then I calculate start index for current page.  After that I use slice to take only products for that page.
For navigation I have next and prev handlers. I make sure page doesnt go below 1 or above total pages.
So basically I just show part of the array depending on current page.

## How the search filter works internally
It loops through all products using filter and checks two things.
First, it check search. I compare product title with search value using includes, and I convert both to lowercase so it works without anything problem.
Second, it checks category. If selected category is "all", then all products are allowed. And the second when product category must match selected category and return.
Only products that match both search and category are returned.

Also for search I would add debounce so it doesnt filter on every key press!!!
