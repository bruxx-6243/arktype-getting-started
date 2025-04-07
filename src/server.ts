import http, { IncomingMessage, ServerResponse } from "node:http";
import { StartTime, StartTimeInput, ValidationResult } from "./types/index.js";
import { type } from "arktype";

export const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.method !== "POST") {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }

    let body: string = "";

    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data: StartTimeInput = JSON.parse(body);

        const validation: ValidationResult = StartTime(data);

        if (validation instanceof type.errors) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Invalid time input",
              details: validation.summary,
            })
          );
        } else {
          const { hour, minute, second } = validation as StartTimeInput;
          const timeString: string = `${hour}:${minute}:${second}`;

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Time set successfully",
              time: timeString,
            })
          );
        }
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid request data" }));
      }
    });
  }
);
