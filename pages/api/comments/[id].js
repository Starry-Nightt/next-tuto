import { comments } from "../../../data/comment";

export default function handler(req, res) {
  const { id } = req.query;
  const comment = comments.find((cmt) => cmt.id == id);
  console.log(comment);
  return res.status(200).json(comment);
}
