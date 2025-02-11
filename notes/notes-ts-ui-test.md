# Detailed Steps for Integrating UI Testing with Storybook and CI Pipeline

I want to check different components usage and how those components looks like in web pages in more fine-grain. So I write this note for guiding add UI test cases for components, and display different test components' UI as snapshots.

## Install Dependencies

- First, install the necessary dependencies for Storybook, Jest, and related tools using Yarn:

```bash
yarn add --dev @storybook/react @storybook/addon-links @storybook/addon-actions
yarn add --dev @storybook/addon-storyshots @storybook/testing-react
yarn add --dev jest-html-reporters
```

- `@storybook/react`: Core Storybook support for React.
- `@storybook/addon-links`: Adds link support for components in Storybook.
- `@storybook/addon-actions`: Captures actions like button clicks in Storybook.
- `@storybook/addon-storyshots`: Enables integration with Jest for snapshot testing.
- `@storybook/testing-react`: Integrate Storybook with Jext for rendering.
- `jest-html-reporters`: Generates HTML reports for Jest tests.

---

## Set Up Storybook

- If we haven't already initialized Storybook, use the following command to set it up:

```bash
yarn storybook init
```

- This will create the default Storybook setup. We can start Storybook with the following script:

```bash
"scripts": {
  "storybook": "start-storybook -p 6006",
  "build-storybook": "build-storybook"
}
```

- Run Storybook:

```bash
yarn storybook
```

- After this we can view Storybook in our browser at [http://localhost:6006](http://localhost:6006).

---

## Write a UI Component and Storybook Stories

- Create a simple UI component and its corresponding Storybook story:

```tsx
// Button.tsx
import React from "react";

type ButtonProps = {};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  <button onClick={onClick} className="btn">
    {label}
  </button>;
};
```

- Storybook Stories Example

```tsx
// __test__/Button.stories.tsx
import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Button label="Click me" onClick={() => alert("Clicked")} />
);
```

- Then, the Default story will display a button labeled "Click me".

---

## Configure Jest for Snapshot Testing

Next, configure Jest to work with Storyshots for snapshot testing.

- Install Jest and Babel (if not installed)

```bash
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react
```

- Configured Jest in package.json

```json
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "jest-environment-jsdom",
    "moduleFileExtensions": ["ts", "tsx", "js", "json"],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "isolatedModules": true
    }
  },
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.ts"]
}
```

- Create Jest Setup File

Create a jest.setup.ts file in the root directory :

```ts
import "@storybook/addon-storyshots";
```

---

## Set Up Storyshots for Snapshot Testing

- Create a Jest test file in the `src/__test__/` directory to configure Storyshots:

```tsx
// src/__tests__/storyshots.test.ts

import initStoryshots from '@storybook/addon-storyshots';
import {render} form '@storybook/testing-react';

initStoryshots({
    test: ({story, context} => {
        const rendered = render(story);
        expect(rendered).toMatchSnapshot();
    })
});
```

This setup will automatically generate snapshots for each Storybook story and verify that the UI components haven't changed unexpectedly.

---

## Run Tests and Generate Reports

- Run Jest Tests

Execute the following command to run Jest tests:

```bash
yarn test
```

Jest will run the snapshot tests and generate snapshot files under the `src/__tests__/` directory.

- Generate HTML Test Reports

- Use `jest-html-reporters` to generate HTML reports.
  - In `jest.setup.ts` configure the report generation:

```ts
import { configure } from "jest-html-reporters";

configure({
  publicPath: "./html-report",
  filename: "index.html",
});
```

After running tests, the HTML report will be generated in `html-report/index.html`. Open this in our browser to view detailed test results.

---

## Set Up CI/CD Pipeline Integration

We can integrate this process in to a CI pipeline to automate the testing and report generation.

- CI Setup Example (Github Action)

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: yarn install

      - name: Run tests
        run: yarn test

      - name: Build Storybook
        run: yarn build-storybook

      - name: Deploy Storybook to GitHub Pages
        run: |
          git config --global user.name "GitHub Actions"
          git config --global user.email "actions@github.com"
          git clone --depth=1 https://github.com/${{ github.repository }} gh-pages
          cp -R storybook-static/* gh-pages/
          cd gh-pages
          git add .
          git commit -m "Deploy Storybook"
          git push origin gh-pages
```

- This workflow will:
  - Install dependencies
  - Run Jest tests(including snapshot tests)
  - Build Storybook
  - Deploy Storybook to GitHub Pages under the gh-pages branch

---

## View Online Snapshot Content on Github/Vercel Pages

Once the CI pipeline runs and deploys the Storybook to GitHub Pages, we can view our UI components online at the GitHub Pages URL.

---

## Optional: E2E Testing with Crypress

If we want to test component interation with Storybook, we can integrate Cypress:

- Install Cypress
- Write Cypress tests for our Storybook components
- Run Cypress

---

## Summary

By combining **Storybook**, **Jest**, and **Storyshots** for snapshot testing, we can:

- Visualize UI components in Storybook.
- Automate snapshot testing to detect any unintended visual changes.
- Generate HTML test reports with `jest-html-reporters`.
- Deploy Storybook to GitHub Pages / Vercel and access it online.
- Integrate the process into a CI pipeline to ensure automated testing and deployment.
