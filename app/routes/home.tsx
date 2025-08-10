import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "TalentScope AI" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className="main-section">
      <h1>Track your Applications & Resume Ratings</h1>
      <h2>Review your submissions and check AI-powered feedback</h2>
    </section>

  </main>;
}
