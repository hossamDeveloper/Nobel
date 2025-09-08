// Map all assets under src/assets to built URLs at build time
// This ensures dynamic resolution in production (Vercel) without relying on runtime new URL
const assetMap = import.meta.glob('../assets/**/*', { eager: true, as: 'url' })

export const resolveAsset = (path) => {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path

  // Normalize incoming path
  let normalized = path
  // Convert absolute "/src/assets/..." to relative key used by glob: "../assets/..."
  if (normalized.startsWith('/src/')) {
    normalized = normalized.replace('/src/', '../')
  }
  // Also handle paths already relative like "src/assets/..."
  if (normalized.startsWith('src/')) {
    normalized = normalized.replace('src/', '../')
  }

  // Try direct key match
  if (assetMap[normalized]) return assetMap[normalized]

  // Fallback: try to find by filename (last segment) if unique
  const filename = normalized.split('/').pop()
  const entries = Object.entries(assetMap)
  const match = entries.find(([key]) => key.endsWith('/' + filename))
  if (match) return match[1]

  return path
} 