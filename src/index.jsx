import Post from './Post'
import './styles/styles.css'

import json from './assets/json'
import WebpakLogo from './assets/webpack-logo.png'


const post = new Post('Webpack Post Title', WebpakLogo)

console.log(`Post to String: ${post.toString()}`)

console.log(`JSON: ${json}`)