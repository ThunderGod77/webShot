const puppeteer = require("puppeteer");
const { upload } = require("./upload");
const { minUpload } = require("./min");
try {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.linkedin.com/feed/");
    const a = await page.screenshot();
    await minUpload(a);

    await browser.close();
  })();
} catch (error) {
  console.log(error);
}
