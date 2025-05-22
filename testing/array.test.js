import { chunk } from "../skyys-lodash/src/utils/array.js";
test("chunk splits an array into smaller arrays", () => {
  const sampleArr = [1, 2, 3, 4, 5];
  expect(chunk(sampleArr, 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});
