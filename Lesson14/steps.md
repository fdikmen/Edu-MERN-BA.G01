## REACT MOVIE APP - STEPS

### A. Redux installation and Deletion of Unnecessary Files.

01. Install Redux Template
```node
# Redux + Plain JS template
npx create-react-app my-app --template redux
```
02. Test Project
```
cd movie-app
npm start
```
03. Move app.js to app folder
04. Delete unnecessary files
setupTests.js, reportWebVitals.js, index.css, App.test.js, App.css, counter Folder, README.md
05. BUG::: Fix import errors.
06. Delete Default/Unnecessary Codes (from App.js)

---
### B. Using a UI Library & Using Layout Template

07. Install SemanticUI from https://react.semantic-ui.com/ | https://react.semantic-ui.com/usage
```node
npm install semantic-ui-react semantic-ui-css
```
import semanticUI in index.js
```node
import 'semantic-ui-css/semantic.min.css'
```
08. Test SemanticUI in App.js (OPTIONAL)
https://react.semantic-ui.com/elements/image/#variations-vertically-aligned

```
import { Divider, Image } from 'semantic-ui-react'
```
```
 <div>
    <Image src={logo} size='tiny' verticalAlign='middle' />
    <span>Middle Aligned</span>
    <Divider />
  </div>
```
09. Create Component (page/HomePage.js)
10. Using Layout Template
- https://react.semantic-ui.com/layouts
- Copy the layout codes from GitHub (
https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/StickyLayout.js) and paste them into HomePage.js.
- The code you paste changes the component name. Fix it. (HomePage.js)
11. Call the HomePage component ini in App.js.
12. BUG::: Fix react-intersection-observer error.
```node
npm i react-intersection-observer
```
13. Delete codes from template
LeftImage, RightImage, Paragraph, style, Container->Header
14. Create PageHeader.js / PageFooter.js with "RCC" snippet
15. Move the codes in HomePage to PageHeader and PageFooter.
- Fix the resulting import errors.
- Remove unnecessary imports.
- Delete unused methods.
- Make very clear components.

---
### C. Configure React-Router-Dom

16. npm i react-router-dom (from https://www.npmjs.com/package/react-router-dom)

17. add <BrowserRouter> to index.js

18. add Links to menu in PageHeader.js

19. Create new components (/features/movie/MovieAdd.js /features/movie/MovieList.js) by "RFC" snippet

20. Create Route codes in RootRouter files.
import rootrouter in HomePage.js.

---
### D. Create MockAPI

21. Create custom api link (https://mockapi.io/)
Fields: id, createdAt, title, avatar, category, country, year, imdb_score

---
### E. Using generic axios

22. instal axios (npm i axios)
23. Define generic Axios base-url (config/axiosConfig.js)

---
### F. Configure React-Redux-RTK

24. Create movieSlice.js file AND Define reducer (slice) with "rxslice" snippet (movieSlice.js)
25. Add reducer to store.js (movieSlice.js)
26. Create reducer method for fetchMovies with asyncThunkMiddleware (movieSlice.js)
27. Define rejected, fullfilled, pending case for fetchMovies Reducer (movieSlice.js)
28. Subscribe states with useSelector (MovieList.js)
29. dispatch fetchMovies in useEffect (MovieList.js)


---
### G. Add Create Movie Aciton & Form

30. Create a ADD FORM (MovieAdd.js)
31. Create a action for createMovie & congfigure extraReducers for createMovie  (movieSlice.js)
32. Coding handleSubmit methods (MovieAdd.js)


---
### H. Add DELETE Movie Aciton & Form

---
### I. Add UPDATE Movie Aciton & Form