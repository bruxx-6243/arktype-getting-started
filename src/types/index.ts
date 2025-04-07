import { type } from "arktype";

const Device = type({
  platform: "'android' | 'ios'",
  "versions?": "(number | string)[]",
});

export const User = type({
  user_name: "string",
  first_name: "string",
  last_name: "string",
  email: "string",
  password: "string",
  phone_number: "string",

  device: Device,
});
