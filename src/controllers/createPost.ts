import { PostRepository } from '~/models/post/repository'
import { baseBuilder } from '~/modules/builder'

export const createPost = baseBuilder.https.onCall(async (data) => {
  await new PostRepository().create()
  console.log('create')
})
