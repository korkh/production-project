## Running the Project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start server + frontend project in dev mode
```

---

## Scripts

- `npm run start` - Start frontend project on webpack dev server
- `npm run start:vite` - Start frontend project on vite
- `npm run start:dev` - Start frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start frontend project on vite + backend
- `npm run start:dev:server` - Start backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Lint ts files
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Lint scss style files
- `npm run lint:scss:fix` - Fix scss style files with linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build storybook
- `npm run prepare` - precommit hooks (husky)
- `npm run generate:slice` - Script for FSD slice generation

---

## Project Architecture

The project is structured according to the Feature Sliced Design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for translation work.
Translation files are stored in public/locales.

For comfortable work, we recommend installing a plugin for webstorm/vscode

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses 4 types of tests:

1. Regular unit tests with jest - `npm run test:unit`
2. Component tests with React testing library - `npm run test:unit`
3. Screenshot testing with loki `npm run test:ui`
4. e2e testing with Cypress `npm run test:e2e`

More about tests - [documentation for testing](/docs/tests.md)

---

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also, for strict control of main architectural principles
uses a custom eslint plugin _eslint-plugin-ulbi-tv-plugin_,
which contains 3 rules

1. path-checker - prohibits the use of absolute imports within the same module
2. layer-imports - checks the correctness of using layers from the FSD point of view
   (for example, widgets cannot be used in features and entities)
3. public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Running linters

- `npm run lint:ts` - Lint ts files
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Lint scss style files
- `npm run lint:scss:fix` - Fix scss style files with linter

---

## Storybook

For each component in the project, story cases are described. Server requests are mocked using storybook-addon-mock.

The file with the story cases is created next to the component with the .stories.tsx extension

You can run Storybook with the command:

- `npm run storybook`

More about [Storybook](/docs/storybook.md)

---

## Project Configuration

For development, the project contains 2 configs:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are adapted for the main features of the application.

All configuration is stored in /config

- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The scripts folder contains various scripts for refactoring\code writing simplification\report generation, etc.

---

## CI pipeline & pre commit hooks

GitHub actions configuration is located in /.github/workflows.
CI runs all types of tests, builds the project and storybook, and performs linting.

Pre-commit hooks check the project with linters, the config is in /.husky

---

### Data handling

Data interaction is done using redux toolkit.
Where possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (to avoid pulling them into the main bundle) uses
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Entities

- [Article](/src/entities/Article/README.md)
- [Comment](/src/entities/Comment/README.md)
- [Counter](/src/entities/Counter/README.md)
- [Country](/src/entities/Country/README.md)
- [Currency](/src/entities/Currency/README.md)
- [Notification](/src/entities/Notification/README.md)
- [Profile](/src/entities/Profile/README.md)
- [Rating](/src/entities/Rating/README.md)
- [User](/src/entities/User/README.md)

## Features

- [addCommentForm](/src/features/addCommentForm/README.md)
- [articleEditForm](/src/features/articleEditForm/README.md)
- [articleRating](/src/features/articleRating/README.md)
- [articleRecommendationsList](/src/features/articleRecommendationsList/README.md)
- [AuthByUsername](/src/features/AuthByUsername/README.md)
- [avatarDropdown](/src/features/avatarDropdown/README.md)
- [editableProfileCard](/src/features/editableProfileCard/README.md)
- [LangSwitcher](/src/features/LangSwitcher/README.md)
- [notificationButton](/src/features/notificationButton/README.md)
- [profileRating](/src/features/profileRating/README.md)
- [ThemeSwitcher](/src/features/ThemeSwitcher/README.md)
- [UI](/src/features/UI/README.md)
