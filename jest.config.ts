import { Config } from "@jest/types"

const config: Config.InitialOptions = {
  testRegex: "src/.*\\.test\\.tsx?$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
}

export default config
