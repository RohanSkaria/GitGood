# GitHub Project Guide

A React application that helps users discover and contribute to open source projects on GitHub by providing an intuitive interface and step-by-step contribution guidance.

## Features

- Search GitHub projects with smart tag filtering
- Curated project discovery based on skill level and programming language
- Step-by-step Git command guidance
- Project posting for collaboration
- Contribution workflow visualization

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── ProjectList/        # Project browsing components
│   ├── SearchBar/         # Search and filtering
│   ├── ContributionGuide/ # Git workflow guidance
│   └── ProjectForm/       # Project submission
├── services/
│   └── github.ts         # GitHub API integration
├── types/
│   └── index.ts         # TypeScript interfaces
├── constants/
│   └── tags.ts         # Tag categories and steps
├── hooks/
│   └── useGithubSearch.ts # Custom search hook
└── utils/
    └── searchQueryBuilder.ts # Search query construction
```

## Key Technologies

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- GitHub REST API
- Lucide Icons

## Getting Started

1. Clone the repository
2. Create a GitHub OAuth application and get your client ID
3. Copy `.env.example` to `.env.local` and add your GitHub credentials
4. Install dependencies with `npm install`
5. Start the development server with `npm run dev`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## License

Apache 2.0 License
