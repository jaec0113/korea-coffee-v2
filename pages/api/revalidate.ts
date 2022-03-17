import type { NextApiRequest, NextApiResponse } from "next"

export const revalidateHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await res.unstable_revalidate("/index")
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send("Error revalidating")
  }
}
