import generateTable from "./generateTable";

describe("Given the function generateTable", () => {
  describe("When it receives 5 columns 4 rows and Array Class", () => {
    test("Then it should return a an array, with four arrays inside that have five arrays.", () => {
      const givenRows = 2;
      const givenColumns = 2;
      const givenClass = Array;
      const expectedOutput = [
        [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
        [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
        [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      ];

      const result = generateTable(givenRows, givenColumns, givenClass);

      expect(result).toMatchObject(expectedOutput);
    });
  });
});
