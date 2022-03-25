export class EmbedObj {
  constructor(
    public embed: {
        created_at: string,
        created_by: string,
        id: string,
        name: string,
        views: number
        },
    public url: string
  ) {
  }

}
