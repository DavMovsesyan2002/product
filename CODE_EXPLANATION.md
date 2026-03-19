# Code Explanation

## How the product fetching logic works
When the app is loading, I call fetchProducts inside useEffect so it runs only once.
Inside this function, I first set loading to true, then call getProducts which makes a request to the API using axios. When I get the response, I save the data in the products state.
If something goes wrong, I show an error message using notistack. In the end I always set loading to false.
While loading is true I show skeleton cards and when data is ready, I render the products.

## Why I chose my state management approach
I used useState because the app is small and all the data are handled inside component. There was no need to add something like Redux. I just pass data to child components using props.
If the project was bigger, then I would consider Redux Toolkit.

## How the search filter works internally
The filtering is done in a separate function filterProducts.
It loops through all products and checks things. if the title includes the search value I convert both to lowercase to avoid case issues.
Only products that pass conditions are returned.

Also for search I would add debounce so it doesnt filter on every key press!!!