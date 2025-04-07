import { type } from "arktype";

export const StartTime = type({
  hour: "number",
  minute: "number",
  second: "number",
});

export interface StartTimeInput {
  hour: number;
  minute: number;
  second: number;
}

export type ValidationResult = ReturnType<typeof StartTime>;
