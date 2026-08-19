import http from "http"

// Focused re-test of lib/pipeline-abort.ts::abortPipeline (commit 98632b6):
// crash at module load so DEPLOY_GREEN_SLOT fails immediately, and confirm
// VERIFY_DEPLOYMENT (the next PENDING ticket in this same pipeline) reaches
// a terminal FAILED state instead of being orphaned RUNNING.
throw new Error("Focused re-test: intentional runtime crash at startup")

const port: number = Number(process.env.PORT) || 3000
const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("unreachable\n")
})
server.listen(port, "0.0.0.0", () => {
  console.log(`listening on ${port}`)
})
