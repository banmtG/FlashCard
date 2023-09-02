const sheetID=`11ToP0WQhuOOw5jqgz2kRmmGGe89pB2JsAXgqT6sAGpE`;
const base = ` https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`
const sheetName = `users`;
const qu = `Select *`;
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

// https://script.google.com/macros/s/AKfycbyx39xj96xYJbuNQZT0VKXmxe-PxNDMTeCh2byZhH8Cx5Uiei8XGp4yTOP8-7dSmsWzHg/exec?name=John&age=35

const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbyx39xj96xYJbuNQZT0VKXmxe-PxNDMTeCh2byZhH8Cx5Uiei8XGp4yTOP8-7dSmsWzHg/exec?name=John&age=35';

document.addEventListener('DOMContentLoaded',init);

function init() {
  console.log('ready');
  fetch (appsScriptUrl)
  .then (res => res.text())
  .then (rep => {
      // console.log(rep);
      // const jsData = JSON.parse(rep.substring(47).slice(0,-2));
      // console.log(jsData);
      // const colz = [];
      // jsData.table.cols.forEach((heading) => {
      //   if (heading.label) {
      //     const propName = heading.label.toLowerCase().replace(/\s/g,``);
      //     colz.push(propName);
      //     //console.log(propName);
      //   }        
      // });
      
      // jsData.table.rows.forEach((row) => {      
      //   console.log(row);
      //   let anItem = {};
      //     for (var i=0;i<colz.length;i++)
      //     {
      //       anItem[colz[i]] = (row.c[i] != null) ? row.c[i].v : '';
      //     }
      //   data.push(anItem);
      // });
      // console.log(data);
  })
}
