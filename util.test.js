// TEST "generateText" FUNCTION
// UNIT TEST
test("output title and price", () => {
  //call generateText function
  const text = generateText("book", 29);
  //my expect from my output function
  expect(text).toBe("book 29");
});

// TEST "checkAndGenerate" FUNCTION
const puppeteer = require('puppeteer')
const { generateText, checkAndGenerate } = require('./util')

// INTEGREATION TEST
test("check and generate input", () => {
  //call checkAndGenerate function
  const text = checkAndGenerate("book", 29);
  //my expect from my output function
  expect(text).toBe("book 29");
});

//ETE TEST
test("click", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });

  // puppeteer create new page with newPage method
  const page = await browser.newPage();
  // goto method is url to address in browser
  await page.goto("http://127.0.0.1:5500/");

  await page.click("#title");
  await page.type("#title", "book");
  await page.click("#price");
  await page.type("#price", "79");
  await page.click("#add-product");
});
