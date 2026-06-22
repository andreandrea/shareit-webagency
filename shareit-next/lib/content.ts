import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export function getContent(filename: string) {
  try {
    const fullPath = path.join(contentDir, `${filename}.md`)
    if (!fs.existsSync(fullPath)) return null
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { ...data, markdown: content }
  } catch (error) {
    console.error(`Error reading content for ${filename}:`, error)
    return null
  }
}
