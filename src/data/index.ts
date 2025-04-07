import { User } from "@/types";

export const person = User({
  user_name: "John Doe",
  first_name: "John",
  last_name: "Doe",
  email: "john@mail.com",
  password: "password",
  phone_number: "123456789",
  device: {
    platform: "android",
    versions: ["1.0", "2.0", "3.0"],
  },
});
