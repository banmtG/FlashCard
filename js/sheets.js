// const sheetID=`11ToP0WQhuOOw5jqgz2kRmmGGe89pB2JsAXgqT6sAGpE`;
// const base = ` https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`
// const sheetName = `users`;
// const qu = `Select *`;
// const query = encodeURIComponent(qu);
// const url = `${base}&sheet=${sheetName}&tq=${query}`;
// const data = [];

const appsScriptUrl=`https://script.google.com/macros/s/AKfycbyPydOh1Au6Nq7cXFdRYM9XpmvUCpdo4YAB5dJvg8VsoNHckrjxzFiiH3M2J9NSLgby/exec?myService=checkUser&name=AD&pass=BiTin2021`;
const btn = document.querySelector('button');
const myInput = document.querySelector('input');
const results = document.querySelector('.results');


btn.addEventListener('click', (e) => {

  var myType = myInput.value;
  url1=`https://script.google.com/macros/s/AKfycbzarzlXiPbDUvZZLG2ugKrGiiEatHIwXUJ8GOjwsiZ9yZlALTO6lsJdRXAr51uXQfRf/exec?type=${myType}`;
  urlDev=`https://script.google.com/macros/s/AKfycbzV4cTALDDhF8B8mCZHaev021TBbjTretcEIo9pmVg/dev`;
  console.log('click');
  console.log(url1);
  fetch (url1)
  .then (res => res.json())
  .then (data => {
      console.log(data);
      console.log(JSON.stringify(data));
  });

});



// document.addEventListener('DOMContentLoaded',init);

var preferenceObj = {
    'userID': 1,
    'listID': 1,
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
 // myService
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


function init() {  
  console.log("init called");

  fetch (appsScriptUrl)
  .then (res => res.text())
  .then (rep => {
       console.log(rep);
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
