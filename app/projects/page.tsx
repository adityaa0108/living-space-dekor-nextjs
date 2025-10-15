import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import SectionTitle from "@/components/home/section-title"
import ProjectCard from "@/components/home/project-card"

const projects = [
  {
    title: "The Harrington Residence",
    location: "Mumbai",
    imageQuery: "modern luxury living room with marble and beige tones",
  },
  {
    title: "Seaside Penthouse",
    location: "Goa",
    imageQuery: "beachfront penthouse neutral palette oak wood and linen",
  },
  { title: "Heritage Townhouse", location: "Delhi", imageQuery: "heritage townhouse with arches and brass accents" },
  { title: "Lakeview Retreat", location: "Udaipur", imageQuery: "calming bedroom with lake view and linen drapes" },
  { title: "Café Bellamy", location: "Bengaluru", imageQuery: "minimal café interior with brass and terrazzo" },
  { title: "Studio Marais", location: "Pune", imageQuery: "creative studio neutral textures and oak cabinetry" },
]

export default function ProjectsPage() {
  return (
    <main>
      <Header />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected Works"
            description="A collection of residential and commercial projects shaped by context and craft."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
