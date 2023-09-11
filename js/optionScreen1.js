let localUserPres,localListArray;
let userName, selectedListID=1;

let StartWordID=1,
    EndWordID=1,
    MasteredWordList=[],
    FavouriteWordList=[],
    FlashCardList=[],
    FlashCardOption='shuffle',
    Playmode=`1`,
    WaitTime=6000,
    wordCountingI,
    WordListArray=[];

var myTimer,myOldTimer,myTimer10;


function LoadScreen2()
{
    console.log(`screen 2 load`);
    localListArray=JSON.parse(localStorage.getItem("localListArray"));
    localUserPres=JSON.parse(localStorage.getItem("localUserPres"));
    userName = localStorage.getItem("userName");
    console.log(`localListArray`, localListArray);
    console.log(`localUserPres`, localUserPres);

    

    const selectStudyListDiv = document.querySelector(`#optionScreen_studyList_SelectID`);
        //console.log(selectStudyList);
    selectStudyListDiv.innerHTML="";
    localListArray.forEach(function(item) {
        var option1 = document.createElement('option');
        option1.text = item.listDescription;
        option1.value = item.listID;
        selectStudyListDiv.add(option1);          
    });   

    if (JSON.parse(localStorage.getItem("selectedListID")))
    {
        let aListArray = [];
        for (var i=0;i<localListArray.length;i++)
            aListArray.push(localListArray[i].listID);
        
        const tempLocalListArray = localStorage.getItem("selectedListID");
        if (aListArray.indexOf(tempLocalListArray)>-1)
        {
            selectStudyListDiv.value=tempLocalListArray;           
        } else 
        { selectStudyListDiv.value = aListArray[0];}
        //console.log(`selectedListID`, selectedListID);
    } else {
        selectStudyListDiv.value = 1;
       
        //console.log(`vao set 1`);
    };
    //selectedListID=selectStudyListDiv.value;
    selectedListID=selectStudyListDiv.value;
 
    console.log(`selectedListID`, selectedListID);

    initialiseControl();
    load4Selects();
    dealWithOnChange();

    $('#optionScreen_welcomeName_SpanID').html(`Welcome <b style="color: var(--blue-color)">${userName}!</b>`);

    loadVariableFromLocalUserPres(selectedListID);
    loadOtherControls();
}



function initialiseControl() 
{
    $('#optionScreen_studyList_SelectID').select2({theme: "SelectList"});
    $('#end-number-wordList').select2({theme: "classic"});
    $('#start-number-wordList').select2({theme: "classic"});
    $('#Mastered-wordList').select2({theme: "Mas"});
    $('#Review-wordList').select2({theme: "Fav"});
    $('#Option-wordList').select2({theme: "NonClassic"});
    $('#Playmode-wordList').select2({theme: "NonClassic"});
    $('#selectLinks').select2({theme: "Mas", minimumResultsForSearch: -1});
    $('#selectLinks').on('select2:select', function (e) {         
        var data = e.params.data;
        window.open(data.element.title);
      // console.log(data.element);
    //   console.log(data.element.title);
        $("#selectLinks").val("");
    });

    
}

function loadVariableFromLocalUserPres(listID) {
    console.log(localUserPres);
    console.log(listID);
    for (var i=0;i<localUserPres.length;i++)
    {
        console.log(localUserPres[i][1]);
        console.log(localUserPres[i][1]);
        if (listID == localUserPres[i][1])
        {            
            StartWordID=localUserPres[i][4];
            console.log(`Start`, localUserPres[i][4]);
            EndWordID=localUserPres[i][5];
            console.log(`End`, localUserPres[i][5]);
            MasteredWordList=localUserPres[i][2].split(`,`).map(function(item) {
                return parseInt(item, 10);
            });
            console.log(`MasteredWordList`, MasteredWordList);
            FavouriteWordList=localUserPres[i][3].split(`,`).map(function(item) {
                return parseInt(item, 10);
            });
            // console.log(FavouriteWordList);
            FlashCardList=localUserPres[i][6].split(`,`).map(function(item) {
                return parseInt(item, 10);
            });
            console.log(`FlashCardList`, FlashCardList);
            // console.log(FlashCardList);
            FlashCardOption=localUserPres[i][7];
          
            WaitTime=localUserPres[i][8];
            Playmode=localUserPres[i][9];      
            wordCountingI=localUserPres[i][10]; 
            console.log(wordCountingI);
        }
    }
}

function findListPosition(listArr,listID) {
    for (var i=0;i<listArr.length;i++)
    {               
        if (parseInt(listID) == listArr[i].listID) {            
            return i;
        }
    }
}

function findListPositionPres(listArr,listID) {
    for (var i=0;i<listArr.length;i++)
    {               
        if (listID == listArr[i][1]) {            
            return i;
        }
    }
}

function load4Selects() {
      
    var listStart= document.getElementById('start-number-wordList');
    var listEnd= document.getElementById('end-number-wordList');
    var listMastered= document.getElementById('Mastered-wordList');
    var listReview= document.getElementById('Review-wordList');
    var stt=1;
    console.log(`vao load4Selects`);
    listStart.innerHTML="";
    listEnd.innerHTML="";
    listMastered.innerHTML="";
    listReview.innerHTML="";
    let pos = findListPosition(localListArray,selectedListID);
    console.log(selectedListID);
    // console.log(pos);
    // console.log(localListArray);
    // console.log(localListArray[pos]);
    // console.log(localListArray[pos].listData);
    localListArray[pos].listData.forEach(function(item){
       var option1 = document.createElement('option');
       option1.text = item[0];
       option1.value = stt;
       listStart.add(option1);

       var option2 = document.createElement('option');
       option2.text =  item[0];
       option2.value = stt;
       listEnd.add(option2);

       var option3 = document.createElement('option');
       option3.text = item[0];
       option3.value = stt;
       listMastered.add(option3);        

       var option4 = document.createElement('option');
       option4.text =  item[0];
       option4.value = stt;
       listReview.add(option4);   

       stt++;
    });
    //document.getElementById("myP").style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;"
    
}

function loadOtherControls()
{
      
        $('#StartID').val(StartWordID).trigger('change'); 
        $('#EndID').val(EndWordID).trigger('change'); 
        $("#Mastered-wordList").val(MasteredWordList).trigger("change");
        $("#Review-wordList").val(FavouriteWordList).trigger("change");
        $('#Option-wordList').val(FlashCardOption).trigger("change.select2");
        $('#Playmode-wordList').val(Playmode).trigger("change.select2");
        $('#WaitTime').val(WaitTime).trigger('change');   
        //console.log(`loadOther Controls`,MasteredWordList);
}

function dealWithOnChange() 
{
        $("#optionScreen_studyList_SelectID" ).on('change', function() {           
            selectedListID = $(this).val();
            //console.log(ListID_GLOBAL);
            load4Selects();
            loadVariableFromLocalUserPres(selectedListID);
            loadOtherControls();
            localStorage.setItem("selectedListID", selectedListID);
       });

        $("#StartID" ).on('change', function() { 
            $("#start-number-wordList" ).val(this.value).trigger('change');
            StartWordID =  $("#start-number-wordList").val();
           
        });

        $("#start-number-wordList").on('change', function(){
            StartWordID = $(this).val();
            document.getElementById("StartID").value=StartWordID;
            savePresToLocalStorage();           
        });
  
        $("#EndID" ).on('change', function() {    
           $("#end-number-wordList" ).val(this.value).trigger('change');
           EndWordID = $("#end-number-wordList").val();
       });

        $("#end-number-wordList").on('change', function(){
            EndWordID  = $(this).val();
            document.getElementById("EndID").value=EndWordID;
            savePresToLocalStorage();
        });


         //////////////////////////////////////////////////////// MASTERED WORDS
         $("#Mastered-wordList").on('change', function(){     
            //console.log(MasteredWordList);      
            MasteredWordList = $(this).val().map(function(item) {
                return parseInt(item, 10);
            }); 
            //console.log(MasteredWordList);      
            $("#sumWordMastered").text(MasteredWordList.length + ` mastered words`);
            savePresToLocalStorage();
        });

        //////////////////////////////////////////////////////// MASTERED WORDS
        $("#Review-wordList").on('change', function(){     
            FavouriteWordList = $(this).val().map(function(item) {
                return parseInt(item, 10);
            });        
            $("#sumWordReview").text(FavouriteWordList.length + ` favorite words`);           
            savePresToLocalStorage();
        });

        //////////////////////////////////////////////////////// PLAY OPTION
        $("#Option-wordList").on('change', function(){
            FlashCardOption = $(this).val();
            savePresToLocalStorage();
        });

         //////////////////////////////////////////////////////// PLAY OPTION
         $("#Playmode-wordList").on('change', function(){
            Playmode = $(this).val();         
            console.log(Playmode);
            savePresToLocalStorage();
        });

        //////////////////////////////////////////////////////// WAITTIME
        $("#WaitTime").on('change', function(){
            WaitTime = $(this).val();          
            savePresToLocalStorage();
        });


    
}


function savePresToLocalStorage() {

    let pos = findListPositionPres(localUserPres,selectedListID);
    //console.log(pos);       
    
    localUserPres[pos][4]=StartWordID;
    localUserPres[pos][5]=EndWordID;
    //console.log(`truoc`, MasteredWordList);       
    
    if (MasteredWordList!="NaN")
    localUserPres[pos][2]=MasteredWordList.join(',');
   // console.log(`sau`, MasteredWordList);       
    
    if (FavouriteWordList!="NaN")
    localUserPres[pos][3]=FavouriteWordList.join(',');
    if (FlashCardList!="NaN")
    localUserPres[pos][6]=FlashCardList.join(',');;
    localUserPres[pos][7]=FlashCardOption;
    localUserPres[pos][8]=WaitTime;
    localUserPres[pos][9]=Playmode;
    localUserPres[pos][10]=wordCountingI;
   // console.log(localUserPres);  
    localStorage.setItem("localUserPres", JSON.stringify(localUserPres));

}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}


function PreparePlaylist()
{
    //if (PlayMode=='1') 
    // console.log(Playmode);
    // console.log(FlashCardOption);
    // console.log(StartWordID);
    // console.log(EndWordID);
    // console.log(MasteredWordList);
    // console.log(FavouriteWordList);

    var rawList=[];

    let pos = findListPosition(localListArray,selectedListID);
    
    for (var jj=parseInt(StartWordID);jj<=parseInt(EndWordID);jj++)
    {              
        let tempArray = localListArray[pos].listData[jj-1].slice();
        tempArray.unshift(jj);
        rawList.push(tempArray);
    }

   // console.log(rawList);    

    var numList=[];    
    
    for (var jj=parseInt(StartWordID);jj<=parseInt(EndWordID);jj++)
    {             
        numList.push(parseInt(jj));
    }

    FlashCardList = [];

    //console.log(numList);    

    if (Playmode=='1') {
        //console.log(" Play mode 1");
        FlashCardList = numList.filter((item) => !MasteredWordList.includes(item));      
    }

   // console.log(FlashCardList); 


    if (Playmode=='2') {
        //console.log(" Play mode 2");
        FlashCardList = numList.slice();
    }

    if (Playmode=='3') {
        //console.log(" Play mode 3");
        FlashCardList = FavouriteWordList.slice();
    }

    if (Playmode=='5') {
        //console.log(" Play mode 3");
        FlashCardList = MasteredWordList.slice();
    }

    let aTemplist=[];
 //   console.log(`FavouriteWordList`,FavouriteWordList);

    if (Playmode=='4') {
        console.log(`FlashCardList b`,FlashCardList);
        FlashCardList = numList.filter((item) => !MasteredWordList.includes(item));      
        //console.log(" Play mode 4");
        console.log(`numList a`,FlashCardList);
      
        console.log(`FlashCardList a`,FlashCardList);
        let min =  numList[0];
        let max =  numList[numList.length-1];
        //console.log(`min`,min);
        //console.log(`max`,max);      
        console.log(`FavouriteWordList`,FavouriteWordList);
        for (var i=0;i<FavouriteWordList.length;i++){
            console.log(FlashCardList.indexOf(FavouriteWordList[i]));
            if (FlashCardList.indexOf(FavouriteWordList[i])>-1)
            {
              //  console.log(`FavouriteWordList[i]`,FavouriteWordList[i]);
                aTemplist.push(FavouriteWordList[i]);
            }
        }

        FlashCardList = FlashCardList.filter((item) => !FavouriteWordList.includes(item));

        // for (var i=0;i<FavouriteWordList.length;i++){
        //     if (FavouriteWordList[i]>=min && FavouriteWordList[i]<=max)
        //     {
        //       //  console.log(`FavouriteWordList[i]`,FavouriteWordList[i]);
        //         aTemplist.push(FavouriteWordList[i]);
        //     }
        // }
      
        console.log(aTemplist);
    }
    

  //  console.log(`FlashCardList before Order`, FlashCardList);  
      
  
  
    if (FlashCardOption=="shuffle") {
        FlashCardList=shuffle(FlashCardList);
        if (aTemplist.length>0) {
            aTemplist=shuffle(aTemplist);
        }
    }

    if (FlashCardOption=="timeAsc") {
        FlashCardList=FlashCardList.sort(function(a, b){return a-b});
        if (aTemplist.length>0) {
            aTemplist=aTemplist.sort(function(a, b){return a-b});
        }
    }

    if (FlashCardOption=="timeDesc") {
        FlashCardList=FlashCardList.sort(function(a, b){return a-b}).reverse();
        if (aTemplist.length>0) {
            aTemplist=aTemplist.sort(function(a, b){return a-b}).reverse();
        }
    }

    if (FlashCardOption=="asc") {
        FlashCardList = sortList(FlashCardList,rawList,'asc');
        if (aTemplist.length>0) {
            aTemplist = sortList(aTemplist,rawList,'asc');
        }
    }

    if (FlashCardOption=="desc") {
      //  console.log(`FlashCardList desc`);
    //    console.log(`FlashCardList before desc`,FlashCardList);
        FlashCardList = sortList(FlashCardList,rawList,'desc');
   //     console.log(`FlashCardList after desc`,FlashCardList);
        if (aTemplist.length>0) {
           // console.log(`atemp desc`);
            aTemplist = sortList(aTemplist,rawList,'desc');
        }
    }

  //  console.log(`aTemplist`,aTemplist);
    console.log(`FlashCardList`,FlashCardList);

    FlashCardList = aTemplist.concat(FlashCardList);

   
   

    console.log(`FlashCardList AFTER Order`, FlashCardList);   
    savePresToLocalStorage(); 
}

function sortList(array,rawList,mode) {
    let aAlphabeticArray = [];
    for (var i=0;i<array.length;i++)
    {
        for (var j=0;j<rawList.length;j++)
        if (array[i]==rawList[j][0])
        {
            aAlphabeticArray.push(rawList[j][1].toString().toLowerCase());
           // break;
        }
    }

    if (mode=='asc') {
      //  console.log(`in asc mode`);
        aAlphabeticArray = aAlphabeticArray.sort();
    }

    if (mode=='desc') {
       // console.log(`in asc mode`);
        aAlphabeticArray = aAlphabeticArray.sort().reverse();
    }

   // console.log(`aAlphabeticArray`, aAlphabeticArray);
    
    let resultArray = [];

    for (var i=0;i<aAlphabeticArray.length;i++)
    {
      //  console.log(`aAlphabeticArray i`,aAlphabeticArray[i]);
        for (var j=0;j<rawList.length;j++)
        {
          // console.log(`rawList j 1`,rawList[j][1].toString().toLowerCase());
            if (aAlphabeticArray[i]==rawList[j][1].toString().toLowerCase())
                {
                    resultArray.push(rawList[j][0]);
                 //   console.log('= nhau');
                   // break;
                }
        }
    }
    //console.log(`resultArray`, resultArray);
    return resultArray;
}

const btnCook_Run = document.getElementById('Cook_Run');

btnCook_Run.addEventListener('click', event => {       
   
    PreparePlaylist();   
    if (FlashCardList.length>0)
    {
        let pos = findListPosition(localListArray,selectedListID);       
        console.log(localListArray);
        console.log(selectedListID);
        console.log(`pos`, pos);
        WordListArray = localListArray[pos].listData.slice();  
        console.log(WordListArray);    

    // if (wordCountingI<StartNumber) wordCountingI=StartNumber;
        wordCountingI=0;  
        $('#optionScreen_DivID').hide();
        $('#flashcardScreen_DivID').show();
        window.clearTimeout(myTimer);
        PlaytoPause ();
        timer();
    } else 
        { alert(`No word to show`); }
});

const btnContinue_Flash_Card = document.getElementById('Continue_Flash_Card');

btnContinue_Flash_Card.addEventListener('click', event => {        
   
    if (FlashCardList.length>0)
    {
// if (wordCountingI<StartNumber) wordCountingI=StartNumber;
    
    let pos = findListPosition(localListArray,selectedListID);
    console.log(localListArray);
    console.log(selectedListID);
    console.log(`pos`, pos);
    WordListArray = localListArray[pos].listData.slice();  
    console.log(WordListArray); 
    console.log(`wordCountingI`, wordCountingI); 
    //wordCountingI;
    $('#optionScreen_DivID').hide();
    $('#flashcardScreen_DivID').show();
    window.clearTimeout(myTimer);
    PlaytoPause ();
    timer();    
    } else 
        { alert(`No word to show`); }
});

// Playmode options 
// 1. Exclude mastered words
// 2. Include mastered words
// 3. Favorite words only (review)
// 4. Favorite words first

// function Test {
//     let allUserRelatedDataOb = {
    //     `user`= {           
            //    `userID`:  userID,
            //    `userName`:  userName
            // },
    //     `listArray` = [ {
    //         `listID`: listID,
    //         `listName`:  listName,
    //         `listDescription`:  listDescription,
    //         `listData`: quy76ffhdsfhkfhjfhsdkjfhskfhdskfjdshfkdshksdhfsdkfhj
    //       }],
     //     `userPres`: 2DData
//     }
// }

const btnPronuniciataion = document.getElementById('btnPronuniciataion');

btnPronuniciataion.addEventListener('click', event => {    
    loadPronunicationDiv();
    $('#pronunciationSection').show();
});

$('.buttonDiv').on('click', function() {
    $("#pronunSectionLeft").empty();
    $("#pronunSectionRight").empty();
    $("#pronunSectionBottom").empty();
    $('#pronunciationSection').hide();
});

const btnLogout = document.getElementById('optionScreen_Logout_SpanID');

btnLogout.addEventListener('click', event => {  
    localStorage.setItem("loginStatus_GLOBAL", `false`); 
    $('#loginScreen_DivID').show();
    $('#optionScreen_DivID').hide();
});


