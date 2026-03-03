import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://jryeulpzjolootabenim.supabase.co",
    changeOrigin: true,
    ws: true,
    secure: true,
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Proxy server running on port " + PORT);
});
