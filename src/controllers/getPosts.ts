import { PostRepository } from '~/models/post/repository'
import { baseBuilder } from '~/modules/builder'

export const getPosts = baseBuilder.https.onCall(async (data) => {
  await new PostRepository().find()
  console.log('hoge')
})
