const text = "Hola Mundo";
const fruits = ["manzana", "Melon", "naranja"];

test("should first", () => {
  expect(text).toMatch(/Mundo/);
});

test("?Existe la manzana?", () => {
  expect(fruits).toContain("manzana");
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar un callback", () => {
  reverseString("hola", (str) => {
    expect(str).toBe("aloh");
  });
});
