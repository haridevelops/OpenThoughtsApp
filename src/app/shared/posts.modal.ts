export class Posts {
    public postDescription: string;
    public postId: string;
    public userName: string = "Harisudhan";
    public likes: number = 2;
    public comments: number = 10;
    
    constructor(postDesc, postId?) {
      this.postDescription = postDesc;
      this.postId = postId;
    }
}