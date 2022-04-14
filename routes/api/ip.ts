import { Handlers } from "../../server_deps.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const ip = ctx.remoteAddr.hostname;
    return new Response(ip);
  },
};
