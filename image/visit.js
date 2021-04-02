const puppeteer = require("puppeteer");

const { minUpload } = require("./min");

exports.getImage = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const a = await page.screenshot();
    const response = await minUpload(a);
    await browser.close();
    console.log({err:false,response:response})
    return {err:false,response:response}
  } catch (error) {
    console.log(error)
    return({err:true})
  }
};
