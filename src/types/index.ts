import { type } from "arktype";

export const User = type({
  user_name: "string",
  first_name: "string",
  last_name: "string",
  email: "string",
  password: "string",
  phone_number: "string",

  device: {
    platform: "'android' | 'ios'",
    "versions?": "(number | string)[]",
  },
});
