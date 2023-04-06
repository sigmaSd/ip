import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const ip = (ctx.remoteAddr as Deno.NetAddr).hostname;
    return new Response(ip);
  },
};
