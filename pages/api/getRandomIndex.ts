// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Query = {
  range: string;
};
type Data = {
  index: number;
  startRange: number;
  maxRange: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const maxRange = req.query.range
    ? Array.isArray(req.query.range)
      ? parseInt(req.query.range[0])
      : parseInt(req.query.range)
    : 10;
  const index = Math.floor(Math.random() * maxRange);
  res.status(200).json({ index, startRange: 0, maxRange: maxRange - 1 });
}
