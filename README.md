# Front End Challenge

This project implements all the features listed [here](https://github.com/poweredbygrow/front-end-challenge#functional-requirements) to create a mock online banking view.

## Tech Stack

- React using [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript](https://github.com/Microsoft/TypeScript)
  - Create React App supports TypeScript out of the box now, so I used default tsconfig, with a couple extra options to be strict about unused imports and variables
  - TypeScript is great :)
- [now.sh](https://zeit.co/now)
  - now allows for quick and easy deployment with every push to master
- [mobx](https://github.com/mobxjs/mobx)
  - I wanted to try out mobx since it is used in your stack
  - I started out using React Context, but once I switched over to mobx, orchestrating data fetching and data manipulation became alot easier
  - mobx coupled with react-hooks via [mobx-react-lite](https://github.com/mobxjs/mobx-react-lite) was nice to work with
- [styled-components](https://github.com/styled-components)
  - styled-components allows me to isolate, reuse, and extend styles easily
  - I really like building up simple "visual components" and using them as building blocks for more complex React components
- [Ant Design](https://github.com/ant-design/ant-design)
  - I went with antd for their minimally styled select and date range components
  - Even though I was already utilizing date-fns, unfortunately antd had hard requirement for using [moment.js](https://github.com/moment/moment/)
- [date-fns](https://github.com/date-fns/date-fns)
  - I've used date-fns in previous project, simple and straight forward
- [recharts](https://github.com/recharts/recharts)
  - I used recharts for their simple pie chart

## Challenges

- mobx and `transaction.category` were not playing well together, so I had to specifically coerce the category from the API json into a string
- mobx-react-lite is pretty new, so docs were not that clear on recommended approach
- customizing styles of third party components (with more time/for actual product, I might consider writing some of these components from scratch for more control)

## Potential Next Steps

If I were to take this project further, it'd be cool to add the following:

- modularize mobx store
  - right now, one store is enough to handle `Transactions`, `Accounts`, and `Categories` but as data complexity grows, it would be good to split these into their own mobx stores contained within a single root store
  - I've heard mobx-state-tree is a good way to organize large complex mobx stores
- add tests
- experiment with more layout options for mobile

## Note

Piggy Bank icon made by [Freepik](www.freepik.com) from [www.flaticon.com](www.flaticon.com)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
