import * as React from "react"
import { App } from "./app"
import { Meta } from "@storybook/react"

export default {
  title: "My App",
  component: App,
} as Meta

export const SimpleExample = () => <App />
