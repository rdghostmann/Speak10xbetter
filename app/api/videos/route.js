// /app/api/videos/route.js
import { list } from '@vercel/blob'

export async function GET(request) {
  const videoFiles = ['IMG_9146.mp4', 'IMG_0096.mp4']
  const blobPromises = videoFiles.map(async (file) => {
    const { blobs } = await list({ prefix: file, limit: 1 })
    return blobs.length ? { file, url: blobs[0].url } : null
  })

  const results = (await Promise.all(blobPromises)).filter(Boolean)

  return Response.json(results)
}
