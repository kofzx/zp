// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": process.env.MODE === 'min' ? 
  {
    "postcss-mpvue-wxss": {}
  } : {
  	"postcss-url": {},
    "autoprefixer": {}
  }
}
