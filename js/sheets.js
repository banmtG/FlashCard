const sheetID=`11ToP0WQhuOOw5jqgz2kRmmGGe89pB2JsAXgqT6sAGpE`;
const base = ` https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`
const sheetName = `users`;
const qu = `Select *`;
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

// https://script.google.com/macros/s/AKfycbyx39xj96xYJbuNQZT0VKXmxe-PxNDMTeCh2byZhH8Cx5Uiei8XGp4yTOP8-7dSmsWzHg/exec?name=John&age=35
// https://script.google.com/macros/s/AKfycbyxj_3kjOvruWp_dvCOLeQCXBAJP_Fy0B-DgXI-hoRIP6dENS4M8I_6SUxb1_CATX0ysg/exec

//https://script.googleusercontent.com/macros/echo?user_content_key=-CExG2jyX7eLW5DC-7lL4cNyahxq_MA8nUU8_7Egn7w-gP8c-GuFBshhroCPDv8DT3vNUIF8G-1vRTF3RvyH0FLHTJ17ynejm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBsfuYkGNoJwV5ZmD61SY9_C_cUssPU_GGfCiOfa0fuzNRb1nGsmPuLbuHO3wVO1Js_qwHxwjbJiX0hwKKWKqUURzWEbVlrVsNz9Jw9Md8uu&lib=MQBMKe_zgcQHYsZ8uMoqIn92TpNrwrxAt
// const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbxxhq9eFJv8UOiu172xml6aLk5ZdSk8WCIXQSp-Elbsa83VbR9v_xocQB6eQMP-D5JDfA/exec?name=John&pass=BiTin2021&masterwords=rugrat, hallo, but';

//const appsScriptUrl ='https://script.googleusercontent.com/macros/echo?user_content_key=CjC1EH9iz687BE3jhXHrZxAQ5plm52N6vzqoFbU7jlTnZBS_myXgXknIQKyqDP3M5tt7Yijv59VEDPffshu4yk6revh2PRW1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPBJkxqD7SFYADxP096vXmSxuMeRA0tsWLmdXIHWTQqsVc7BPi8ONIjZDEJBUg_cGw&lib=MQBMKe_zgcQHYsZ8uMoqIn92TpNrwrxAt';

const appsScriptUrl=`https://script.google.com/macros/s/AKfycbzoRaYfarjkNY6ILEwWdFsV3tMUFyXPRM8CGeU2iOAumfKPjX38I3gflQ2lefwHiZVNGg/exec`;

document.addEventListener('DOMContentLoaded',initPOST);

// let preferenceObj = {
//   'userID': '1',
//   'listID': '1',
//   'firstno' : 0,
//   'lastno' : 10,
//   'playorder' : `asc`,
//   'interval': 6000,	
//   'playmode' : 1
// }

// preferenceObj['lastcookedwords'] = [];
// preferenceObj['anObject'] = {
//   'key1' : 'something',
// };

// preferenceObj.anObject['key2'] = [];
// for (var i=0;i<100;i++) {
//   preferenceObj.lastcookedwords.push(i);
//   preferenceObj.anObject.key2.push (i+13);
// }


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
  const url1=`${appsScriptUrl}?type=${myTypeValue}`;
  const formData = new FormData();
  formData.append('key1', 'value1');  
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
