import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Blog({
        title: req.body[i].title,
        content: req.body[i].slug,
        author: req.body[i].desc,
        metadesc: req.body[i].img,
        slug: req.body[i].category,
      });
      await p.save();
    }
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
