# Architecture

- Inputs like search, filter, and sort are in the Fields folder because they are all same fields. Product stuff like ProductCard and ProductModal are separate because they represent the main. Things like pagination, empty state and skeleton loaders are also separate so they can be reused and the code stays cleaner. 
- Created a constants folder to avoid hardcoded values in the code
- I also added Prettier to keep the code formatting the same the project.
- I moved filtering and sorting into utils, and API calls into a service, so everything is not mixed together. 
- For state management I used useState. The app is small, so there is no need for Redux. All state lives in App like products, filters, search, sort, selected product, loading and pagination. Then I just pass props down. Simple.
- I created a separate test folder where I keep unit tests for components and utils.