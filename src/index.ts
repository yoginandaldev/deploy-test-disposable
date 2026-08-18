import http from "http"

// Attempt 3: deliberate RUNTIME crash — throws at module load, before the
// server ever binds a port. Different failure mode than Attempt 1's
// TypeScript compile error: this builds fine and crashes on start.
throw new Error("Attempt 3: intentional runtime crash at startup (undefined config)")

const port: number = Number(process.env.PORT) || 3000
const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("unreachable\n")
})
server.listen(port, "0.0.0.0", () => {
  console.log(`listening on ${port}`)
})
