import puppeteer from 'puppeteer';

class Scraper {
  async click(page: puppeteer.Page, selector: string) {
    const element = await page.waitForSelector(selector);
    if (element) element.click();
  };
  async elementClick(page: puppeteer.Page, selector: string){
    const element: any = await page.$x(selector);
    if (element[0]) element[0].click();
  };
  async scanListing(page: puppeteer.Page) {
    await page.waitForSelector('.b3onmgus');
    const listing = await page.$$eval('.b3onmgus', (elHandles: any) => elHandles.forEach((el: any) => el));
    console.log(listing);
  }
}

const scraper = new Scraper();
export default scraper;