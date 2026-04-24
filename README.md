# Tobams Group - Frontend Intern Assessment

## Live URL
[Vercel Live Link](https://tobams-frontend-assessment-six.vercel.app/)

## Figma Design Reference
[Figma Link](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1)

## Tech Stack
- Next.js 15 (App Router) [![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#)
- Tailwind CSS v4 [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
- TypeScript [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
- Deployed on Vercel [![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)

## Setup Instructions
1. Clone the repository
   git clone https://github.com/emmanuelheritage/tobams-frontend-assessment.git

2. Navigate into the project
   cd tobams-frontend-assessment

3. Install dependencies
   npm install

4. Run the development server
   npm run dev

5. Open your browser at http://localhost:3000

## Project Structure
``` src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── LearningManagementSystem.tsx
│   ├── CorporateTrainings.tsx
│   ├── PersonalisedIndividualTraining.tsx
│   ├── CapacityDevelopment.tsx
│   └── Testimonials.tsx
```

## Design Decisions & Technical Assumptions
- Used next/image with fill prop for background images instead of 
  Tailwind's bg-[url()] due to path resolution issues with Tailwind v4.
- Mobile-first approach was adopted, scaling up to tablet and desktop
  using Tailwind's sm: md: lg: responsive prefixes.

## Responsive Breakpoints
- 375px - Mobile
- 768px - Tablet
- 1280px+ - Desktop

## Known Issues
- The Mobile version of the project is not yet pixel-perfect at this point in time, some paddings, margins needs to be adjusted. 
- The Desktop Version is not ready yet.

## AI Disclosure

- I used both Claude (Anthropic) and the Brave Browser AI for guidance on the README.md structure, component structure and debugging. All code was written and understood by me.
- I copied and pasted the Project Structure generated ny AI ito my ```README.md``` file

## Author
Falodun Emmanuel  
E-mail: falodunemmauel1@gmail.com