# REST Countries

## Description

This project is developed to display rest countries API data in listing and detail page. Filteration and basic transalation feature is implemented.
Dark Mode is also wokring. Apllication is responsive for almost all devices.

## Views

These are the views for the REST Countries lsiting and detail.

1. **Country listing view**

   This view is showing list of all countries with some basic filters.

2. **Country Detail View**

   This page is showing details of country.

## Some technical details for developers

### This is a [react.js] project bootstrapped with [`create-react-app`](https://create-react-app.dev/).

To learn more about reactjs, take a look at the following resources:

- [Learn reactjs](https://reactjs.org/docs/getting-started.html)
- [learn create-react-app](https://create-react-app.dev/)

#### To run the Project locally

**Install dependencies**

```bash
npm install
```

**Running the development server**

```bash
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.

### API endpoints

Frontend consumes the following endpoints from rest countries API [full documentation here](https://restcountries.com/#api-endpoints-v2)):

| Endpoint              | Usage in views         |
| --------------------- | ---------------------- |
| GET /all              | Countries Lisitng View |
| GET /region/${region} | Countries Lisitng View |
| GET /name/${name}     | Country Detail Page    |

### Aapter Design Pattern

This app is using `Adapter Design Pattern` to make code logic simple, easy and maintainable. All adapters are placed in `src/utils/adapters` folder.

### Routing

Routing of this application is managed with well known package named [`react-router-dom`](https://reactrouter.com/docs/en/v6/getting-started/overview) .

when we need to add a new route, we have to go to routing file placed `src/routes/routing.tsx`. we will register new route here with a unique path.

### API and Data fetching

we are using a free REST api service to fetch countries data [REST Countries](https://restcountries.com/#api-endpoints-v2).
For data fetching have used [Axios](https://www.npmjs.com/package/axios) library.

### TypeScript

All `typescript` interfaces are placed in `src/models` files. This approach will help us to understand the expected reponse of each API.

### Models

This app is using [Typescript](https://www.typescriptlang.org/), which has better readability, predictions and more rich IDE support compared to regular JavaScript. It also makes it easy to early identify bugs and refactor faster.

### Styles and Theming

**Styled Components**
[styled-components](https://styled-components.com/docs/advanced) has full theming support by exporting a Provider called <ThemeProvider> as wrapper component.

#### Testing setup is in progress

Frontend application should be covered with unit tests and rendering tests. The testing libraries being used are [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library).

Test files are created by adding a `.test.tsx` file, example for component `Buttons.tsx` add a `Button.test.tsx`

Run tests with command `npm run test` or `npm run test:watch` to start local server.

Testing coverage would also be placed in coverage folder when unit testing will be done.
