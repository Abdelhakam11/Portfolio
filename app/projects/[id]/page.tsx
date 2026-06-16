import { projects } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectPageClient id={id} />;
}
