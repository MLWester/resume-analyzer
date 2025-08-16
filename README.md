# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

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

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
