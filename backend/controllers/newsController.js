const unirest = require('unirest');
const cheerio = require('cheerio');
const search = require('youtube-search');
const axios = require('axios');

const opts = {
    maxResults: 1,
    key: process.env.YOUTUBE_KEY,
}

const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
    params: {
      query: 'cat',
      geo: 'US',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '4cde0acf57msh442276794630700p1fd575jsn7e69796c80ed',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};  

const scrapNews = (async (req, res) => {
    let obj = {};
    let arr1 = [];
    let arr2 = [];
    let target_url = 'https://www.timesnownews.com';
    let data = await unirest.get(target_url);
    const $ = cheerio.load(data.body);
    listItems = $('div._3ECx');
    let searchNews;
    listItems.each(async function(idx, el) {
        let news = ($(el).text());
        arr1.push(news);
        searchNews=news;
    });
    options.params.query = searchNews;
    let target_url1 = 'https://ddnews.gov.in';
    let data1 = await unirest.get(target_url1);
    let $1 = cheerio.load(data1.body);
    listItems = $1('h3.item_list_heading');
    listItems.each(async function(idx, el) {
        let news1 = ($1(el).text());
        arr2.push(news1);
    });

    //console.log(options)
    // try {
    //     let response = await axios.request(options);
    //     console.log(response.data.data[0]);
    // } catch(error) {
    //     console.error(error);
    // }
    res.json({data1: arr1, data2: arr2});
})

const fetchVideoId = (async(req, res) => {
    const news = req.body.news;
    options.params.query = news;
    let response;
    try {
        response = await axios.request(options);
    } catch(error) {
        console.error(error);
    }
    res.json({id: response.data});
})

module.exports = {
    scrapNews,
    fetchVideoId
};