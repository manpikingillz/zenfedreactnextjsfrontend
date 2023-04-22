// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}



// @Gilbert: Note: Let's say you had no backend like django or some other backend, 
// you can have your api routes / endpoints here. This would act like your backend of sorts.

// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { name, email } = req.body;
//       // Send a POST request to your API to create the user
//       const response = await axios.post(
//         "https://your-api.com/users",
//         { name, email }
//       );
//       res.status(200).json(response.data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "An error occurred" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }