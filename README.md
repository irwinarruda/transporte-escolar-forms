# Front-end of a forms service for research on transportation

A forms service for research on school transportation that contains a front-end made with Next.js receiving data from a [back-end made with PHP](https://github.com/umarley/pesquisa-transporte-escolar).

## Technologies

-   NextJs
-   Styled-Components
-   Unform
-   Yup
-   React Collapse
-   SweetAlert

### Why Nextjs?

Since a form tends to be a static page without dynamic changes of data, it’s good to keep in mind the speed in which the page loads to the user. Because of that, it makes sense to use [Next.js with getStaticProps](https://nextjs.org/docs/basic-features/data-fetching) instead of CRA.

### Why Unform?

Also, since this forms service receives questions from a back-end, it would be hard to keep track of all the state variables for example. Not only that, but having a lot of states in a cases like this could create performance issues. Unform is a state management library for forms in React that doesn’t control the inputs, so it doesn’t create any state variable. Because of that, I decided to use Unform for the main functionality.

---
