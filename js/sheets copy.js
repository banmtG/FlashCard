const sheetID=`11ToP0WQhuOOw5jqgz2kRmmGGe89pB2JsAXgqT6sAGpE`;
const base = ` https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`
const sheetName = `users`;
const qu = `Select *`;
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

const appsScriptUrl=`https://script.google.com/macros/s/AKfycby2avKkuf8OY4LToJJDXu-Xwh7qX9sGzuwWrIDizJG1yOVVGfhWu8NVfG3eBeBlU5TKyg/exec`;

document.addEventListener('DOMContentLoaded',initPOST);

var preferenceObj = {
    'userID': 2,
    'listID': 2,
    'firstno' : 0,
    'lastno' : 10,
    'playorder' : `asc`,
    'interval': 6000,	
    'playmode' : 1
  }
  preferenceObj['myservice'] = `upDatePreference`;
  preferenceObj['masterwords'] = [];
  preferenceObj['reviewwords'] = [];
  preferenceObj['lastcooklist'] = [];

  for (var i=0;i<10;i++) {
    preferenceObj.masterwords.push(i);
    preferenceObj.reviewwords.push(i+5);
    preferenceObj.lastcooklist.push(i+10);
  }

  console.log(preferenceObj);


  var myPostDataObj = {
    'myservice': 'upDatePreference',
    'preferenceObj': preferenceObj  
  }  

  console.log(myPostDataObj);

function checkUsers (name,pass)
{
  myService
  const url1=`${appsScriptUrl}?service=${myService}`;
  fetch (url1)
  .then (res => res.text())
  .then (rep => {
       return rep;
  })
}

function initPOST() {  
 const myTypeValue=2;
  //const url1=`${appsScriptUrl}?type=${myTypeValue}`;
  const url1=appsScriptUrl;
  // const formData = new FormData();
  // formData.append('key1', 'value1');  
  fetch (url1 ,{
    method: 'POST',
    body: JSON.stringify(myPostDataObj)
  })
  .then (res => res.text())
  .then (data => {
      console.log(data);

      // services = data.replace(/'/g, '"'); //replacing all ' with "
      // services = JSON.parse(data);
      // console.log(services);

      //console.log(data.replace(/\[|\]/g,'').split(','));
       //const jsData = JSON.parse(data.substring(47).slice(0,-2));
     //  console.log(jsData);
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


// function init() {  
//   fetch (appsScriptUrl)
//   .then (res => res.text())
//   .then (rep => {
//        console.log(rep);
//       // const jsData = JSON.parse(rep.substring(47).slice(0,-2));
//       // console.log(jsData);
//       // const colz = [];
//       // jsData.table.cols.forEach((heading) => {
//       //   if (heading.label) {
//       //     const propName = heading.label.toLowerCase().replace(/\s/g,``);
//       //     colz.push(propName);
//       //     //console.log(propName);
//       //   }        
//       // });
      
//       // jsData.table.rows.forEach((row) => {      
//       //   console.log(row);
//       //   let anItem = {};
//       //     for (var i=0;i<colz.length;i++)
//       //     {
//       //       anItem[colz[i]] = (row.c[i] != null) ? row.c[i].v : '';
//       //     }
//       //   data.push(anItem);
//       // });
//       // console.log(data);
//   })
// }
