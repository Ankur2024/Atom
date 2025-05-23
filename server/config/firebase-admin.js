import admin from "firebase-admin";
import { readFileSync } from "fs";
import { URL } from "url";

const serviceAccount = JSON.parse(
  readFileSync(new URL("../serviceAccountKey.json", import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
