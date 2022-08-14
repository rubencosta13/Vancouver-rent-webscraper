import puppeteer, { Browser, Puppeteer } from "puppeteer";


class Scrapper {
  public client: any;
  constructor() {
    this.client = null;
  }
  async login(url: string) {
    if (typeof url !== 'string')
      throw new Error('Type of URL is not a string!');
    this.client = await puppeteer.launch();
    const page = await this.client.newPage();
    this.client = await page.goto(url);
  }
}

const scrapper = new Scrapper();

export { scrapper as Scrapper }