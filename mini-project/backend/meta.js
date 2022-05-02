import axios from "axios";
import cheerio from "cheerio";

export async function createBoardAPI(mydata) {
    const targetURL = mydata
    //   const targetURL = mydata.contents
//     .split(" ")
//     .filter((el) => el.startsWith("http"))[0];
  const obj = [];
  const aaa = await axios.get(targetURL);
  const $ = cheerio.load(aaa.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      console.log(key, value)
      if( key === "title" || key ==="description" || key ==="image"){// title, description, image 선언
        obj[key] = value;
      }
    }
  });
  return obj;
}

const frontendData = {
  title: "안녕하세요~~~",
  contents:
    "여기 정말 좋은거 같아요! 한번 꼭 놀러오세요!! 여기가 어디냐면 https://google.com 이에요!!!",
};