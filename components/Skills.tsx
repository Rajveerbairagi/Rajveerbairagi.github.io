export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Next.js & React</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• Framer Motion</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Backend & APIs</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Node.js</li>
            <li>• FastAPI</li>
            <li>• Express.js</li>
            <li>• REST APIs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Database & AI</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• PostgreSQL</li>
            <li>• Prisma</li>
            <li>• Redis</li>
            <li>• LangChain & ChromaDB</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Tools</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Git & GitHub</li>
            <li>• Docker</li>
            <li>• Vercel</li>
            <li>• Appwrite & Supabase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}