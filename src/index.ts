import puppeteer from 'puppeteer';
import scraper from './app';
import data from './utils/data.json';

const start = async () => {
  console.log("starting");
  // await scraper.login('https://www.facebook.com/marketplace/vancouver/1-bedroom-apartments/?exact=false')
  const browser = await puppeteer.launch(data.ARGS);
  const page = await browser.newPage();
  await page.setViewport(data.SCREEN);
  await page.setUserAgent(data.USERAGENT);
  await page.goto(data.URL, {waitUntil: 'load', timeout: 10000});
  //clear the cookies
  setTimeout( async () => {
    await scraper.click(page, data.SELECTORS.COOKIES);
    await scraper.click(page, data.SELECTORS.RADIUS);
    await scraper.click(page, data.SELECTORS.RADIUS_SELECTOR);
    await scraper.click(page, data.SELECTORS.KM_SELECTOR);
    // wait for 2 seconds
    await new Promise(r => setTimeout(r, 2000));
    await scraper.elementClick(page, data.SELECTORS.APPLY);
    await scraper.scanListing(page);
  }, 900)

};

start();