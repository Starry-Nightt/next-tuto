import { comments } from "../../../data/comment";

export default function handler(req, res) {
  if (req.method === "GET") return res.status(200).json(comments);
  else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: comments.length + 1,
      text: comment,
    };
    comments.push(newComment);
    console.log(comments);
    return res.status(201).json(newComment);
  }
}
