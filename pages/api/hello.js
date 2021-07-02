// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Head from "next/head";

const myObj = [
  {
    name: "justin",
    class: 10,
    place: "MAYUR VIHAR 3",
  },
];

export default function handler(req, res) {
  res.status(200).json(myObj);
}
