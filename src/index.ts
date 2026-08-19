import http from "http"
throw new Error("Full regression: Attempt 3 intentional runtime crash")
const port: number = Number(process.env.PORT) || 3000
const server = http.createServer((_req, res) => { res.end("unreachable") })
server.listen(port, "0.0.0.0")
