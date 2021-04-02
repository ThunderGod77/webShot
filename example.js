const puppeteer = require("puppeteer");
const { upload } = require("./upload");

try {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.linkedin.com/feed/");
    const a = await page.screenshot();
    await upload(a);

    await browser.close();
  })();
} catch (error) {
  console.log(error);
}
