import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPostsByCategory() {
  // if there are no posts, the empty directory
  // wont get pushed to github and this code will
  // break  
  if (fs.existsSync(postsDirectory)) {
    // get all nested posts
    const categoryNames = fs.readdirSync(postsDirectory)

    const data = categoryNames.map(category => {
      const folderPath = `${postsDirectory}/${category}`
      const fileNames = fs.readdirSync(folderPath)
      const categoryWithPosts = {
        categoryName: category,
        posts: fileNames.map(fileName => {
          // Remove ".md" from file name to get id
          const id = fileName.replace(/\.md$/, '')

          // Read markdown file as string
          const fullPath = path.join(folderPath, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')

          // Use gray-matter to parse the post metadata section
          const matterResult = matter(fileContents)

          return {
            id: `${category}-${fileName.replace(/\.md$/, '')}`,
            ...matterResult.data
          }
        })
      }

      return categoryWithPosts
    })

    // sort posts by updatedAt in each category
    data.forEach(categoryWithPosts => {
      categoryWithPosts.posts.sort(({ updatedAt: a }, { updatedAt: b }) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1
        } else {
          return 0
        }
      })
    })
    return data
  } else {
    return []
  }
}

export function getAllPostIds() {
  // if there are no posts, the empty directory
  // wont get pushed to github and this code will
  // break 
  if (fs.existsSync(postsDirectory)) {
    const categoryNames = fs.readdirSync(postsDirectory)

    const postIds = []

    categoryNames.forEach(category => {
      const folderPath = `${postsDirectory}/${category}`
      const fileNames = fs.readdirSync(folderPath)

      fileNames.forEach(fileName => {
        postIds.push({
          params: {
            id: `${category}-${fileName.replace(/\.md$/, '')}`
          }
        })
      })
    })

    return postIds
  } else {
    return []
  }
}

export async function getPostData(idWithCategory) {
  const delimiter = "-"

  const [category, id] = idWithCategory.split(delimiter)
  
  const fullPath = path.join(postsDirectory, `${category}/${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // combine the data with the id
  return {
    id: idWithCategory,
    contentHtml,
    ...matterResult.data
  }
}