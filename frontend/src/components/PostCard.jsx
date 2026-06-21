function PostCard({ post }) {

  return (
    <div className="card mb-3">

      <div className="card-body">

        <h5>
          {post.author.firstName}
        </h5>

        <p>
          {post.content}
        </p>

        <button className="btn btn-outline-primary">
          Like
        </button>

      </div>

    </div>
  );
}

export default PostCard;