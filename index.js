console.log('hello')
document.getElementById('p').innerText = `іпаііва`

// import Map from './node_modules/ol/Map.js';
// import View from './node_modules/ol/View.js';
// import TileLayer from './node_modules/ol/layer/Tile.js';
// import OSM from './node_modules/ol/source/OSM.js';
// import XYZ from './libs/ol/source/XYZ.js';

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM(),
//     }),
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 2,
//   }),
// });

const tg = window.Telegram.WebApp

document.getElementById('p').innerText = `${tg.initDataUnsafe.user.first_name}`

console.log('initData', tg.initData)
console.log('initDataUnsafe', tg.initDataUnsafe)

console.log('themeParams', tg.themeParams)
