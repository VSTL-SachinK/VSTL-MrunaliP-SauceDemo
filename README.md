# SauceDemo UI Automation Framework

Hybrid UI + API test automation framework for [saucedemo.com](https://www.saucedemo.com), built with **Playwright + TypeScript**, using the **Page Object Model**, custom **fixtures**, **Allure reporting**, and a **GitHub Actions CI/CD pipeline**.

<!-- Replace ORG/REPO below with your actual GitHub path once pushed -->
![Playwright Tests](https://github.com/ORG/REPO/actions/workflows/playwright.yml/badge.svg)

## Tech stack
- **Language:** TypeScript
- **Framework:** Playwright Test
- **Design pattern:** Page Object Model + custom test fixtures
- **Test data:** JSON (login) and Excel/xlsx (checkout) — data-driven
- **Reporting:** Allure + Playwright HTML report
- **CI/CD:** GitHub Actions (cross-browser matrix, nightly regression, auto-published report)

## Project structure
```
├── page/            # Page Object classes
├── locators/         # Element locators, separated from page logic
├── fixtures/         # Custom Playwright fixtures (baseFixture.ts)
├── wrappers/          # Reusable element/assertion action wrappers
├── testData/          # JSON / Excel test data files
├── tests/              # Spec files
├── playwright.config.ts
└── .github/workflows/playwright.yml   # CI/CD pipeline
```

## Running locally
```bash
npm install
npx playwright install --with-deps

npm test                 # run all tests, all browsers
npm run test:chromium    # run only on Chromium
npm run test:headed      # run with a visible browser

npm run allure:generate  # build the Allure report from allure-results
npm run allure:open      # open it locally
```

## CI/CD pipeline
Every push and pull request to `main` triggers `.github/workflows/playwright.yml`, which:
1. Checks out the code and installs dependencies (with npm caching).
2. Installs Playwright browsers.
3. Runs the suite in parallel across Chromium, Firefox, and WebKit.
4. Uploads the Playwright HTML report and raw Allure results as build artifacts.
5. On `main`, merges the Allure results and publishes the report to **GitHub Pages** so it can be shared as a live link.

It also runs automatically every night (scheduled regression) and can be triggered manually from the **Actions** tab.