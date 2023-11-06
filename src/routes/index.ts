import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();

function cleanFileName(fileName: string): string {
  const result = fileName.split(".").shift();
  if (typeof result === "undefined") return "";
  return result;
}

readdirSync(__dirname).map((fileName) => {
  const name = cleanFileName(fileName);
  if (name !== "index") {
    import("./" + name).then((file) => {
      router.use("/" + name, file.router);
    });
  }
});

export { router };
