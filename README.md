
# TalentScope AI – Smart Resume Analyzer

TalentScope AI is a modern, full-stack web application that leverages artificial intelligence to help job seekers optimize their resumes and maximize their chances of landing their dream job. Built with a focus on user experience, performance, and real-world utility, this project demonstrates my ability to deliver robust, production-ready solutions using today’s best web technologies.

## Features

- **AI-Powered Resume Analysis:** Instantly receive actionable feedback and suggestions to improve your resume’s content, structure, and keyword optimization.
- **Job Description Matching:** Upload a job description and see how well your resume aligns, with gap analysis and targeted recommendations.
- **ATS Compatibility Checker:** Ensure your resume is Applicant Tracking System (ATS) friendly, with warnings for formatting or keyword issues.
- **PDF to Image Conversion:** Seamlessly convert PDF resumes to images for advanced AI processing and preview.
- **Modern UI/UX:** Responsive, accessible, and visually appealing interface built with Tailwind CSS.
- **File Upload & Management:** Drag-and-drop file uploads, real-time status updates, and secure file handling.
- **State Management:** Efficient global state using Zustand for a smooth, reactive user experience.
- **Type Safety:** End-to-end TypeScript for maintainable, error-resistant code.

## Tech Stack

- **Frontend:** React 19, React Router 7, Tailwind CSS, clsx, tailwind-merge
- **State Management:** Zustand
- **PDF Processing:** pdfjs-dist
- **File Uploads:** react-dropzone
- **Build Tooling:** Vite, TypeScript, vite-tsconfig-paths
- **Developer Experience:** Hot Module Replacement (HMR), TypeScript strict mode, modular codebase
- **Deployment Ready:** Docker support, Netlify-compatible static assets, production build scripts

## Getting Started

```bash
npm install
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to use the app locally.

## Building for Production

```bash
npm run build
```

## Deployment

- **Netlify:** Just drag-and-drop or connect your repo. All static assets and the PDF worker are in `/public` for seamless deployment.
- **Docker:** Build and run with `docker build -t talent-scope-ai .` and `docker run -p 3000:3000 talent-scope-ai`.

## Why This Project Stands Out

- **Real-World Impact:** Solves a genuine problem for job seekers with practical, AI-driven features.
- **Modern Engineering:** Uses the latest React ecosystem, TypeScript, and best practices for scalability and maintainability.
- **Attention to Detail:** Handles edge cases (like PDF worker versioning), robust error handling, and user privacy.
- **Extensible:** Designed for easy addition of new features, such as cover letter generation, LinkedIn analysis, or interview prep.

---

> Built with passion and precision by Mason Wester.  
> Ready to help users land their dream job—and to help your team build the future.

---
