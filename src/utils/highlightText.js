// Divide um texto em fragmentos, marcando quais devem receber
// destaque dourado, sem alterar o conteúdo textual original.
export function buildHighlightFragments(text, highlights = []) {
  if (!highlights.length) {
    return [{ text, highlight: false }]
  }

  const pattern = highlights
    .filter(Boolean)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')

  if (!pattern) return [{ text, highlight: false }]

  const regex = new RegExp(`(${pattern})`, 'g')
  const parts = text.split(regex)

  return parts
    .filter((part) => part !== '')
    .map((part) => ({
      text: part,
      highlight: highlights.includes(part)
    }))
}
