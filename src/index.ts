import puppeteer from 'puppeteer';
import data from './utils/data.json';

const start = async () => {
  console.log("starting");
  // await scraper.login('https://www.facebook.com/marketplace/vancouver/1-bedroom-apartments/?exact=false')
  const browser = await puppeteer.launch({
    headless: false,
    args:[
      '--start-fullscreen'
    ]
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.setUserAgent(data.USERAGENT);
  await page.goto('https://www.facebook.com/marketplace/vancouver/1-bedroom-apartments/');
  //clear the cookies
  await page.click(data.SELECTORS.COOKIES); 
  await page.click(data.SELECTORS.RADIUS);
  await page.click(data.SELECTORS.RADIUS_SELECTOR);
};

start();