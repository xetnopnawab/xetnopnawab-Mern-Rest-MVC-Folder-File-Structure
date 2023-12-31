import  shortid  from "shortid";
import { Url } from "../models/url.model";

async function handleGenerateNewShortnerURL(req, res) {
  const body = req.body;
  if (!body.Url) return res.status(400).json({ error: "Url is required" });
  const shortId = shortid();

   await Url.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}
module.exports = {
  handleGenerateNewShortnerURL,
};
