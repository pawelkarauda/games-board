const axios = require('axios');
const cheerio = require('cheerio')

const gloom = "https://boardgamegeek.com/boardgame/174430/gloomhaven";
const root = "https://boardgamegeek.com/boardgame/237182/root";

async function run(){
  
    const response = await axios.get(gloom);

    const $ = cheerio.load(response.data);

    let code;


    $('script').each(function(index, elem){
      
      if(elem.children[0] && elem.children[0].data){
        if(!code){
          code = elem.children[0].data;
        }
      }
    });
    eval(code);

    const game = GEEK.geekitemPreload.item;

    const isExpension = game.subtype === 'boardgameexpansion';

    const result = {
      name: game.primaryname.name,
      bggItemId: game.itemid,
      bggHref: game.href,
      publishedYear: Number(game.yearpublished),
      minPlayers: Number(game.minplayers),
      maxPlayers: Number(game.maxplayers),
      minPlaytime: Number(game.minplaytime),
      maxPlaytime: Number(game.maxplaytime),
      description: game.description.replace(
        /href="(.*)"/g,
        "href='https://boardgamegeek.com$1 target='_blank'"
      ),
      source: "bgg",
      thumbnail: game.images.thumb,
      squareThumbnail: game.images.square200,
      isExpension,
      boardgameId: isExpension ? Number(game.links.expandsboardgame[0].objectid) : null
    };

    console.log(result);

}


run();