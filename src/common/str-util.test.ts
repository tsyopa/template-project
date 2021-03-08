import { StrUtil } from "./str-util"

it("can check itself", () => {
  const spy = jest.spyOn(StrUtil, "check")
  StrUtil.check()
  expect(spy).toBeCalled()
})
