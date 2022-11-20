// Using Scrape-it as scrapper
const scrapeIt = require("scrape-it")

const getListAnime = async(q) => {

await scrapeIt(`https://myanimelist.net/search/all?q=${q}&cat=anime`, {
    articles:{
	listItem:"div.information.di-tc.va-t.pt4.pl8",
	  data:{
	   title:".hoverinfo_trigger.fw-b.fl-l",
	   content:".pt8.fs10.lh14.fn-grey4"
	   }
	 }
}).then(({data, response}) => {
	console.log(`Status Code : ${response.statusCode}`)
	console.log(data)
})
}
// Add The Anime Title As Parameter
getListAnime('fairy tail')

