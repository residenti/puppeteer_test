const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      //'--disable-setuid-sandbox'
    ]
  });
  // Debugging.
  //const browser = await puppeteer.launch({
  //  headless: false,
  //  slowMo: 250 // slow down by 250ms
  //});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
