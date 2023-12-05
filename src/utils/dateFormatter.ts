export function dateFormatter(date: string): string {
  if (!date) {
    return "present"
  }

  const [month, year] = date.split('/')
  const a = new Date(Number(year), Number(month) - 1)

  return new Intl.DateTimeFormat('en-US', {month:'short', year:'numeric'}).format(a)
}