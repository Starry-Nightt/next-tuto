import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const onSubmitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <input
        className="input input-primary"
        placeholder="Comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button className="btn btn-accent" onClick={onSubmitComment}>
        Add
      </button>
      <h2>Comments</h2>
      <button className="btn btn-primary" onClick={fetchComments}>
        Load more
      </button>
      <ul>
        {comments.map((comment, idx) => (
          <li key={idx}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}
