import * as crypto from "crypto";

export async function POST(req) {
  const { email, fname, lname, tag, country, location } = (await req?.json()) || {};

  const subscriber_hash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");

  const axios = require("axios");
  let data = JSON.stringify([
    {
      id: email.toLowerCase(),
      // "first-name": fname,
      // "last-name": lname,
      "email-address": email.toLowerCase(),
      // city: location,
      // country: country,
      // tags: [tag],
    },
  ]);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://arep.co/api/v1/ingest/contacts?provider=juicyfest",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_APP_AREP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  let mailinListConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://arep.co/api/v1/ingest/mailing-list?provider=juicyfest",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_APP_AREP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: { name: "timeless-fest-25", "contact-ids": [email.toLowerCase()] },
  };
  let list_res = axios
    .request(mailinListConfig)
    .then((res) => {
      console.log(JSON.stringify(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return Response.json(list_res);
}
