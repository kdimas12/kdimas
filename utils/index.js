export const sortByDate = (a, b) => {
  return new Date(b.fronmatter.date) - new Date(a.fronmatter.date)
}