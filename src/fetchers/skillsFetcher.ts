import { Technology } from "@/typings/schemas"

export async function fetchSkills(): Promise<Technology[]> {
  const res = await fetch(`${process.env.PORTFOLIO_API}/technologies`, { next: { revalidate: 600 } })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return ((await res.json()) as unknown as Technology[])
}