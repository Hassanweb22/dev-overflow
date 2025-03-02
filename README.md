<div align="center">
  <br />
    <a href="https://www.jsmastery.pro/ultimate-next-course" target="_blank">
      <img src="https://github.com/user-attachments/assets/769882e6-bae6-4932-a117-829cf34f809f" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-Open_AI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
  </div>

  <h3 align="center">The Ultimate Next.js Course</h3>

   <div align="center">
     Build this project step by step with our detailed course on <a href="https://www.jsmastery.pro" target="_blank"><b>JavaScript Mastery PRO</b></a> Website. Join the JSM PRO family!
    </div>
</div>

# DevFlow - Next.js 15 Q&A Platform

A comprehensive Stack Overflow-inspired platform built with Next.js 15, MongoDB, and AI integration. This project demonstrates advanced full-stack development practices following JSMastery's Ultimate Next.js Course.

In this in-depth course, you’ll master Next.js by building and deploying a full-stack project, Devoverflow—a community-driven platform inspired by StackOverflow, enhanced with AI-powered answers, gamification, recommendations, and more. Using the latest features of Next.js, you’ll explore rendering strategies like SSG, ISR, SSR, PPR, Server Functions, Caching, & Revalidation to create a production-ready application.

The project uses MongoDB for a robust database layer, NextAuth (Auth.js) for versatile authentication options (Email/Password, GitHub, Google), and sleek styling with TailwindCSS and ShadCN UI. Devoverflow enables developers to ask questions, post answers, leverage AI for responses, vote, organize content, contribute, discover jobs, and explore recommended topics—all while engaging with gamified elements like badges and rewards.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk (Planned)
- **Database**: MongoDB (Planned)
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Validation**: Zod

## 📦 Project Structure

```
.
├── app/                    # Next.js 15 App Router directory
│   ├── (auth)/             # Authentication routes (grouped)
│   ├── (root)/             # Main application routes
│   └── api/                # API endpoints
├── components/             # React components
│   ├── cards/              # Content display components
│   ├── forms/              # Form components with validation
│   ├── shared/             # Reusable components
│   └── ui/                 # Core UI elements
├── constants/              # Application constants and config
├── context/                # React Context providers
├── database/               # Database configuration and models
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
│   ├── actions/            # Server actions
│   ├── utils.ts            # Helper functions
│   └── validations.ts      # Zod validation schemas
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
├── auth.ts                 # Authentication configuration
├── middleware.ts           # Next.js middleware for route protection
└── next.config.ts          # Next.js configuration
```

## 🚀 Implementation Highlights

### Server-First Architecture

Next.js 15's App Router enables a server-first approach with React Server Components:

```tsx
// Server Component Example (app/question/[id]/page.tsx)
export default async function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  // Direct database access in server component
  const question = await getQuestionById(params.id);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex-between">
        <h1 className="h1-bold text-dark100_light900">{question.title}</h1>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <ContentRenderer content={question.content} />

          {/* Client component for interactive elements */}
          <VoteButtons
            type="Question"
            itemId={question._id}
            userId={userId}
            upvotes={question.upvotes}
            downvotes={question.downvotes}
          />
        </div>

        <AnswerList answers={question.answers} />
      </div>
    </div>
  );
}
```

### Authentication with Clerk

```tsx
// auth.ts configuration
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    // will see that
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### Form Handling with React Hook Form + Zod

```tsx
// Form implementation pattern (components/forms/QuestionForm.tsx)
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { QuestionSchema } from "@/lib/validations";
import { createQuestion } from "@/lib/actions/question.actions";

export default function QuestionForm() {
  const form = useForm({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  async function onSubmit(values) {
    try {
      await createQuestion(values);
      // Handle success
    } catch (error) {
      // Handle error
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Form fields */}
      </form>
    </Form>
  );
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/deve-overflow.git
   ```

2. Install dependencies

   ```bash
   cd deve-overflow
   npm install
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env.local
   # Fill in the required environment variables
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

## 🌟 Features (Planned)

- User Authentication
- Question Posting
- Answer Submission
- Voting System
- Tagging
- Search Functionality
- User Profiles
- AI-Powered Answers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - [Your Email]

Project Link: [https://github.com/yourusername/deve-overflow](https://github.com/yourusername/deve-overflow)
