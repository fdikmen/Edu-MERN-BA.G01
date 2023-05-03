const slugify = require('slugify') // REACT (with Babel) => import slugify from 'slugify'

var version01 = slugify('some string') // some-string

// if you prefer something other than '-' as separator
var version02 = slugify('some string', '_')  // some_string

console.log("version01=>",version01)
console.log("version02=>",version02)




// import vs require

//import { slugify } from 'slugify' // ES6 with BABEL 
//const { slugify } = require('slugify') // CommonJS


