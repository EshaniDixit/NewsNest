var search = require('youtube-search')

var keyword = "react-cards"

var opts = {
  maxResults: 10,
  key: "AIzaSyD4D5CPLK--gJGyZwmQ0p-xZEKqybHzBBA"
}

search(keyword, opts, function(err, results) {
  if(err) return console.log(err)
  console.dir(results)
})