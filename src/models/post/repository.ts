/**
 *
 */
export class PostRepository {
  /**
   * find
   */
  async find(): Promise<void> {
    await new Promise((res) => setTimeout(res, 1000))
    throw Error('find')
  }

  /** */
  async create(): Promise<void> {
    await new Promise((res) => setTimeout(res, 1000))
    throw Error('create')
  }
}
