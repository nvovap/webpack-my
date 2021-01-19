import * as $ from 'jquery';

import Post from '@models/Post'
import './styles/styles.css'

import json from './assets/json'
import WebpakLogo from './assets/webpack-logo.png'


import xml from './assets/data.xml'

import csv from './assets/data.csv'

console.time('labelName');

const post = new Post('Webpack Post Title', WebpakLogo)

console.group("Этап 1");
console.log(`Post to String: ${post.toString()}`)

console.log(`JSON: ${json}`)

console.log(`XML: ${xml}`)

var myArray=[{a:1,b:2,c:3},{a:1,b:2,c:3,d:4},{k:11,f:22},{a:1,b:2,c:3}]
console.table(myArray);
myArray=[[1,2,3],[1,2,3,4],[,,11,22],[1,2,3]];
console.table(myArray);

console.groupEnd();

console.timeEnd('labelName');

console.group("Этап 2");

console.log('CSV:', csv);


$('pre').html(post.toString())

