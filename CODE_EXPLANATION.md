# Code Explanation

## How the product fetching logic works

When the application loads, the `App` component calls the `fetchProducts` function inside `useEffect`. This ensures that products are fetched only once when the component mounts.

The `fetchProducts` function sets a loading state to `true` and then calls the `getProducts` service, which sends a request to the Fake Store API using axios.

If the request is successful, the received data is stored in the `products` state. If there is an error, a notification is shown using `notistack`. In all cases, the loading state is turned off at the end using `finally`.

This allows the UI to show skeleton loaders while data is being fetched and display products once ready.

---

## Why I chose my state management approach

I used React's built-in `useState` because the application is relatively small and does not require complex global state management.

All the necessary state (products, filters, sorting, selected product, etc.) is managed inside the main `App` component and passed down to child components via props.

This keeps the solution simple, readable, and easy to maintain. For larger applications, I would consider using Redux Toolkit.

---

## How the search filter works internally

The filtering logic is implemented in a utility function called `filterProducts`.

It uses the `Array.filter()` method to iterate over all products. For each product:
- It checks if the product title includes the search input value (case-insensitive).
- It checks if the product matches the selected category, or allows all if the category is `"all"`.

Both conditions must be true for the product to be included in the result.

This keeps the filtering logic clean and reusable.

---

## One potential performance improvement

Currently, filtering and sorting are executed on every render. This is fine for small datasets, but for larger datasets it may become inefficient.

A possible improvement would be to use `useMemo` to memoize the filtered and sorted products, so they are recalculated only when dependencies (products, search value, category, sort) change.