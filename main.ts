import { serve } from "https://deno.land/std@0.150.0/http/server.ts";

async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);
  if (pathname === "/") {
    return new Response("OK", {
      headers: {
        "content-type": "text/html;charset=utf-8",
      },
    });
  }

  if (pathname === "/favicon.ico") {
    return new Response(await Deno.readFile("favicon.ico"), {
      headers: {
        "content-type": "image/x-icon",
      },
    });
  }

  return fetch(new URL(pathname, "https://raw.githubusercontent.com"));
}

serve(handleRequest);
