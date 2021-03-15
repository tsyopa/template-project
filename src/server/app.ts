import * as express from "express"
import { StrUtil } from "../common/str-util"

const app = express()

app.use(express.static("target/client"))
app.use(express.static("public"))

app.get("/some", (_req, res) => {
  res.json({ result: "ok" })
})

StrUtil.check()

app.listen(9000, () => console.log("Running on port 9000"))
