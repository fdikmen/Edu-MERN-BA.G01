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
### C. React Router