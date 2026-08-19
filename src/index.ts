import http from "http"
// A different failure mode than the prior runs (TS build error, then runtime
// throw): here the app binds to the WRONG interface (127.0.0.1 instead of
// 0.0.0.0), so it's genuinely running but never reachable from outside the
// container -- the same "started but isn't listening" outcome via a third,
// distinct root cause.
const port: number = Number(process.env.PORT) || 3000
const server = http.createServer((_req, res) => { res.end("unreachable") })
server.listen(port, "127.0.0.1", () => {
  console.log(`listening on ${port} (loopback only, intentionally unreachable)`)
})
