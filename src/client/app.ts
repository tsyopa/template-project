import * as ReactDOM from "react-dom"
import { App } from "./components/app"
import "./styles/app.scss"

const appEl = document.getElementById("app")
ReactDOM.render(App(), appEl)
