import { Experience } from "@/typings/schemas"

export async function fetchExperiences(): Promise<Experience[]> {
  const res = await fetch(`${process.env.PORTFOLIO_API}/experiences`, { next: { revalidate: 600 } })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const experiences = ((await res.json()) as unknown as Experience[]).sort((a, b) => {
    const [aMonth, aYear] = a.period.start.split('/')
    const [bMonth, bYear] = b.period.start.split('/')
    const aStart = new Date(Number(aYear), Number(aMonth)).getTime()
    const bStart = new Date(Number(bYear), Number(bMonth)).getTime()
    if (aStart > bStart) {
      return -1
    }
    if (aStart < bStart) {
      return 1
    }
    else {
      return 0
    }
  })
 
  return experiences
}