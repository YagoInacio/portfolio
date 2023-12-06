import { Project } from "@/typings/schemas"

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.PORTFOLIO_API}/projects`, { next: { revalidate: 600 } })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return ((await res.json()) as unknown as Project[])
}