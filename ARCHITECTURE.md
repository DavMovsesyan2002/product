# Architecture

- I didn’t want to put everything in one file, so I split components on what they do.  
- Inputs like search, filter, and sort are in the Fields folder because they are all controls. Product stuff like ProductCard and ProductModal are separate because they represent the main data. Things like pagination, empty state, and skeleton loaders are also separate so they can be reused and the code stays cleaner. 
- Created a constants folder to avoid hardcoded values in the code
- I also added Prettier to keep the code formatting the same the project.
- The main idea was to keep App as the place where logic lives and components mostly handle UI. I also moved filtering and sorting into utils, and API calls into a service, so everything is not mixed together. 
- For state management I used useState. The app is small, so there is no need for Redux. All state lives in App - products, filters, search, sorting, selected product, loading, and pagination. Then I just pass props down. Simple.
- If this was a real production project, I would improve a few things. First, I would add debounce for the search input, so it doesn’t update on every key press.
