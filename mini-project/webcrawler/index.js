import puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Starbucks } from "./models/starbucks.model.js";

mongoose.connect("mongodb://localhost:27017/codecamp");

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do");

  for(let i =1; i<= 10; i++){
    const name = await page.$eval(
        `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,
        (el) => el.textContent
      );
      page.waitForTimeout(1000);
      const imgURL = await page.$eval(
        `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,
        (el) => el.src
      );
      page.waitForTimeout(1200);
      console.log(name);
      console.log(imgURL);
    
      const starbucks = new Starbucks({
        name: name,
        img: imgURL,
      });

    await starbucks.save();
  }

  

  await browser.close();
}

startCrawling();
