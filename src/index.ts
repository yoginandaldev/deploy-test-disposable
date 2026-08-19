import http from "http"

const port: number = Number(process.env.PORT) || 3000
const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("deploy-test-disposable — full regression run, Attempt 2\n")
})
server.listen(port, "0.0.0.0", () => {
  console.log(`listening on ${port}`)
})
