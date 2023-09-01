const sheetID=`11ToP0WQhuOOw5jqgz2kRmmGGe89pB2JsAXgqT6sAGpE`;
const base = ` https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`
const sheetName = `users`;
const query = encodeURIComponent(`Select *`);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];


document.addEventListener('DOMContentLoaded',init);

function init() {
  console.log('ready');
  fetch (url)
  .then (res => res.text())
  .then (rep => {
      console.log(rep);
  })
}
