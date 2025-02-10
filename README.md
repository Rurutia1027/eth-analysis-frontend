# **Eth-Analysis-Frontend** 🚀 [![Build React TypeScript Project](https://github.com/Rurutia1027/eth-analysis-frontend/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/Rurutia1027/eth-analysis-frontend/actions/workflows/build.yml)

## **📖 Overview**

The **eth-analysis-frontend** is a modern Ethereum data analysis platform developed with **TypeScript**, **Next.js**, **Tailwind CSS**, and **SCSS**.

---

- **Frontend Deployment**: [Frontend Deployment](https://eth-analysis-frontend.vercel.app/)
- **Storybook Deployment**: [Storybook Deployment](https://eth-storybook.vercel.app)

---

## **🛠️ Tech Stack**

- **TypeScript**: Static typing for better development experience.
- **Next.js**: React framework for building fast and scalable apps.
- **Tailwind CSS**: Utility-first CSS framework for responsive designs.
- **SCSS**: Modular and reusable styling.
- **Yarn**: Dependency and script management.
- **StoryBook**: Frontend UI Component Test Framework.

---

## **✨ Features**

- Real-time Ethereum data visualization.
- Fully responsive design for mobile and desktop.
- Organized modular code structure.

---

## **🚀 Getting Started**

### Deploy Eth-Analysis-Frontend

#### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Rurutia1027/eth-analysis-frontend.git
```

#### **2️⃣ Install Dependencies**

```bash
npm install && yarn build
```

#### **3️⃣ Start Development Server**

```bash
yarn run dev

# then open http://localhost:3000
```

### Deploy Project's StoryBook

#### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Rurutia1027/eth-analysis-frontend.git
```

#### **2️⃣ Install Dependencies**

```bash
npm install && yarn build && yarn run dev

# then open http://localhost:3000
```

#### **3️⃣ Build StoryBook && Set up StoryBook Web Page**

```bash
yarn storybook build # this command has already been configured in the package.json

# then open http://localhost:6006
```

---

## 📂 **Folder Structure**

```
eth-analysis-frontend/
├── .github/workflows/         # GitHub Actions workflows for CI/CD
│   ├── build.yml              # Build pipeline configuration
│   ├── deploy-storybook.yml   # Storybook deployment pipeline
│   └── deploy.yml             # General deployment pipeline
├── .next/                     # Next.js build output directory
├── .storybook/                # Storybook configuration files
├── .vscode/                   # VSCode-specific workspace settings
├── coverage/                  # Test coverage reports
├── locales/                   # Localization files for internationalization
├── node_modules/              # Installed project dependencies
├── notes/                     # Project notes and documentation
├── public/                    # Static public assets like images and fonts
├── src/                       # Source code for the project
│   ├── __tests__/             # Unit and integration test files
│   ├── api/                   # API request logic and configurations
│   ├── assets/                # Static assets used within the project
│   ├── components/            # Reusable React components
│   ├── constants/             # Constant values and configuration data
│   ├── contexts/              # React context implementations
│   ├── dashboards/            # Dashboard-related components and logic
│   │   ├── Dashboards.tsx     # Main dashboard component
│   │   └── sections/         # Specific dashboard sections
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Next.js pages for routing
│   ├── stories/               # Storybook stories for UI component documentation
│   │   ├── assets/            # Assets specific to Storybook stories
│   │   ├── components/        # Stories for individual UI components
│   │   ├── dashboards/        # Stories related to dashboard components
│   │   └── pages/             # Stories for full-page layouts
│   ├── styles/                # Global and component-specific styles (Tailwind, CSS)
│   └── utils/                 # Utility functions and helper scripts
├── .env                       # Environment variables for local development
├── .eslintrc.js               # ESLint configuration for code linting
├── .gitignore                 # Specifies files to be ignored by Git
├── jest.config.js             # Jest configuration for testing
├── LICENSE                    # Project license information
├── next-env.d.ts              # TypeScript environment definitions for Next.js
├── next.config.js             # Next.js configuration file
├── package.json               # Project metadata, dependencies, and scripts
├── postcss.config.js          # PostCSS configuration
├── prettier.config.js         # Prettier configuration for code formatting
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript compiler configuration
├── tsconfig.tsbuildinfo       # TypeScript incremental build information
└── yarn.lock                  # Yarn lockfile for consistent dependency management
```

---

## 💡 Contribution

We welcome contributions! If you’d like to help improve the eth-analysis-frontend, follow these steps:

---

## 🎉 Happy Coding!

Thanks for checking out eth-analysis UI! We’re always happy to have more contributors. If you have any questions or need help getting started, don’t hesitate to reach out.

Happy coding and enjoy exploring Ethereum data! 🚀

---

## 📝 [Reference]()

- [Ultrasound-Money-Frontend](https://github.com/ultrasoundmoney/frontend)
- [Ultrasound-Money-Backend](https://github.com/ultrasoundmoney/eth-analysis-rs)

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).
