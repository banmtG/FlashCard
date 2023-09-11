function showWord(theFakeI) 
{        
    let i=theFakeI-1;
    if (myTimer10!=null) window.clearTimeout(myTimer10);
    document.getElementById('ACard').innerHTML = "Empty";  
    if ((i>=0) && (i< WordListArray.length))
    {                

    let IPA_UK = (WordListArray[i][5]!="")?`/${WordListArray[i][5]}/`:"";
    //console.log(IPA_UK);
    let IPA_US = (WordListArray[i][6]!="")?`/${WordListArray[i][6]}/`:"";
    //console.log(IPA_UK);

    let totalCard = FlashCardList.length;
    let position = wordCountingI+1;
    let aString = `(` + position + `/` + totalCard  +`)`;
   
    document.getElementsByClassName('verticalWord')[0].innerHTML=`<div class="verticalPart"><span>` + WordListArray[i][0] + `</span> <span style="font-weight: 300; font-size:2.5rem; margin: 20px 0;">` + IPA_UK + `</span> </div><div class="paging">  
    <span style="font-size: 1.2rem" id="CardIDNumber"></span>
    <span style="font-size: 1.2rem" id="Paging"></span>
    </div>`;
     
    $('#CardIDNumber').text(theFakeI);

    if (FavouriteWordList.indexOf(parseInt($('#CardIDNumber').text()))>-1) {
        $('#AddToFavouriteList').css('color','greenyellow');
    } else 
    $('#AddToFavouriteList').css('color','white');


    if (MasteredWordList.indexOf(parseInt($('#CardIDNumber').text()))>-1) {
        $('#AddToMasteredList').css('color','red');
    } else 
    $('#AddToMasteredList').css('color','white'); 

    $('#Paging').text(aString);
    let linkOptions = document.getElementById('selectLinks').options;
    
    //console.log(linkOptions);

    Array.from(linkOptions).forEach(function (element) {
        element.title = element.value.replaceAll("theWord", WordListArray[i][0]);
    });

    // linkOptions.forEach((item) => {
    //     item.value = item.value.replaceAll("theWord", WordListArray[i].wordString);
    // });

    document.getElementById('ACard').innerHTML = "";  
    $("#ACard").append(`<div><div class="theWord">` + WordListArray[i][0] + 
        `</div><span class="pronounce">` + IPA_UK + `</span> <i style="font-size:2rem" class="pronounceIcon fa fa-volume-up" aria-hidden="true"></i> UK <i style="font-size:2rem"  class="pronounceIcon fa fa-volume-up" aria-hidden="true"></i> US </div>`);
    $("#ACard").append(`<div style="width: 100%;" id="cardBody"></div>`);
    $("#cardBody").append(`<div class="definition"><b>Định nghĩa: </b><p style="margin-top:0.3rem">` +  WordListArray[i][1] + `\n` + WordListArray[i][2] + `</p></div>`);

    $("#cardBody").append(`<div class="examples"><b>Ví dụ:</b><ul>`+ WordListArray[i][3] + `</ul></div>`);

    if (WordListArray[i][4]!=null)
    $("#cardBody").append(`<img class="illustration"src="`+ WordListArray[i][4] + `">`);

    
    const myAudioUK = document.getElementById('myAudioUK');
    if (WordListArray[i][7]=="") {
        myAudioUK.src="https://dict.youdao.com/dictvoice?audio=" + WordListArray[i][0]  + " &type=1";
    } else {
        myAudioUK.src=`https://dictionary.cambridge.org/media/english/uk_pron` + WordListArray[i][7];
    }

    myAudioUK.play();

    const myAudioUS = document.getElementById('myAudioUS');

    if (WordListArray[i][8]=="") {
        myAudioUS.src="https://dict.youdao.com/dictvoice?audio=" + WordListArray[i][0]  + " &type=2";
    } else {
        myAudioUS.src=`https://dictionary.cambridge.org/media/english/us_pron` + WordListArray[i][8];
    }

  

    var myElement = document.getElementById('cardBody');

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on("swiperight", function(ev) {
        $('#PreviousCard').trigger( "click" );
        //myElement.textContent = ev.type +" gesture detected.";
    });

    mc.on("swipeleft", function(ev) {
        $('#NextCard').trigger( "click" );
        //myElement.textContent = ev.type +" gesture detected.";
    });

    mc.on("tap", function(ev) {
        $('#PausePlay').trigger( "click" );
        //myElement.textContent = ev.type +" gesture detected.";
    });

    mc.get('pinch').set({ enable: true });
    
    
    var allVolumeBtn = document.getElementById("ACard").getElementsByClassName("pronounceIcon");
  
    allVolumeBtn[0].addEventListener('click', function(event) {

        playSoundUntilCarouselPlay();

        if ($('#PauseBtn').is(':visible'))
        {
            window.clearTimeout(myTimer);
            console.log(`myTimer.cleared`,myTimer);
            $(".PlayButton").toggle();
        }     
        });

    allVolumeBtn[1].addEventListener('click', function(event) {
        
        myAudioUS.play();

        if ($('#PauseBtn').is(':visible'))
        {
            window.clearTimeout(myTimer);
            console.log(`myTimer.cleared`,myTimer);
            $(".PlayButton").toggle();
        }     
        });      

   }
}     

function playSoundUntilCarouselPlay() 
{
    timer10();
}


timer10 = function() {
    const myAudioUK = document.getElementById('myAudioUK');
    myAudioUK.play();
    myTimer10 =  setTimeout(timer10, 3000);
}


timer = function() {

    savePresToLocalStorage();
    console.log(localUserPres);

    if (wordCountingI<FlashCardList.length) {                
        showWord(FlashCardList[wordCountingI]);
        wordCountingI++; 
    }

    if (wordCountingI==FlashCardList.length) {
        wordCountingI=0;
    
    }
    myOldTimer = myTimer;
    myTimer =  setTimeout(timer, WaitTime);

}

function PlaytoPause () {
    console.log("vao");
    console.log($('#PlayBtn').is(':visible'));
    if ($('#PlayBtn').is(':visible'))
    {
        $('#PlayBtn').hide();
        $('#PauseBtn').show();
    }
}


$('#BacktoMenu').on('click', function() {
    $('#flashcardScreen_DivID').hide();
    $('#optionScreen_DivID').show();
    window.clearTimeout(myTimer);
    window.clearTimeout(myTimer10);
    console.log(`myTimer.cleared`,myTimer);
});

$('#PreviousCard').on('click', function() {
    if ($('#PauseBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        console.log(`myTimer.cleared`,myTimer);
        $(".PlayButton").toggle();
    }           
  
   // console.log(`myTimer`, myTimer);
   var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));
    console.log(`wordCountingI`, wordCountingI);
    //wordCountingI =  $('#CardIDNumber').text();
    console.log(`realPosition`, realPosition);
    if (wordCountingI>realPosition) wordCountingI=realPosition;


   console.log(`wordCountingI`, wordCountingI);
    //wordCountingI =  $('#CardIDNumber').text();
   // console.log(`realPosition`, realPosition);

    console.log(`wordCountingI s1`, wordCountingI);
    console.log(`wordCountingI s2`, wordCountingI);
    wordCountingI--;
    console.log(`wordCountingI s3`, wordCountingI);

    if (wordCountingI<0) {
        wordCountingI=FlashCardList.length-1;
       //$('#CardIDNumber').text(wordCountingI);
    }
    // if (wordCountingI-1>realPosition) wordCountingI--;
    // if (wordCountingI=realPosition) wordCountingI++;

    showWord(FlashCardList[wordCountingI]);

   

 //   console.log(`wordCountingI`, wordCountingI);

   
    
});

$('#NextCard').on('click', function() {

    if ($('#PauseBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        console.log(`myTimer.cleared`,myTimer);
        $(".PlayButton").toggle();
    }           
    //console.log(`myTimer`, myTimer);
    //console.log(`$('#CardIDNumber').text()`, $('#CardIDNumber').text());
    var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));
    console.log(`FlashCardList`, FlashCardList);
    console.log(`$('#CardIDNumber').text()`, $('#CardIDNumber').text());
    console.log(`wordCountingI`, wordCountingI);
    console.log(`realPosition`, realPosition);
    //wordCountingI =  $('#CardIDNumber').text();               
  


   // console.log(`wordCountingI`, wordCountingI);
    //wordCountingI =  $('#CardIDNumber').text();


    

    if (realPosition==FlashCardList.length-1) {
        wordCountingI=-1;
       //$('#CardIDNumber').text(wordCountingI);
    }

    wordCountingI++;

    console.log(`wordCountingI s1`, wordCountingI);

    if (wordCountingI-1>realPosition) wordCountingI--;
    console.log(`wordCountingI s2`, wordCountingI);

    if (wordCountingI==realPosition) wordCountingI++;
    console.log(`wordCountingI s3`, wordCountingI);

    showWord(FlashCardList[wordCountingI]);
   

   
    console.log(`wordCountingI`, wordCountingI);

});

$('#PausePlay').on('click', function() {
   
    //console.log(`myTimer.cleared`,myTimer);
    if ($('#PlayBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        timer();
        console.log(`myTimer.cleared`,myTimer);
    }

    if ($('#PauseBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        console.log(`myTimer.cleared`,myTimer);
    }

    $(".PlayButton").toggle();

});


$('#AddToMasteredList').on('click', function() {
   
    // if ($('#PauseBtn').is(':visible'))
    // {
    //     window.clearTimeout(myTimer);
    //     $(".PlayButton").toggle();
    // }           

    //wordCountingI=wordCountingI-1;
    // console.log(`MasteredWordList`, MasteredWordList);
    var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));
    // console.log(`realPosition`, realPosition);
    // console.log(`FlashCardList[realPosition]`, FlashCardList[realPosition]);
  
    const index = MasteredWordList.indexOf(parseInt($('#CardIDNumber').text()));

    if (index > -1) { 
      MasteredWordList.splice(index, 1); 
      $('#AddToMasteredList').css('color','white');
    } else
    { 
        $('#AddToMasteredList').css('color','red');
        MasteredWordList.push(FlashCardList[realPosition]);
    }
    // console.log(`MasteredWordList`, MasteredWordList);

    $("#Mastered-wordList").val(MasteredWordList).trigger("change.select2");

    // FlashCardList.splice(FlashCardList.indexOf(FlashCardList[realPosition]), 1);
    savePresToLocalStorage();    
    //showWord(FlashCardList[realPosition]);
    // console.log(`myTimer.cleared`,myTimer);
});

$('#AddToFavouriteList').on('click', function() {
   
    // if ($('#PauseBtn').is(':visible'))
    // {
    //     window.clearTimeout(myTimer);
    //     $(".PlayButton").toggle();
    // }           
    //wordCountingI=wordCountingI-1;
    // console.log(`FavouriteWordList`, FavouriteWordList);
    var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));

    const index = FavouriteWordList.indexOf(parseInt($('#CardIDNumber').text()));

    if (index > -1) { 
        FavouriteWordList.splice(index, 1); 
      $('#AddToFavouriteList').css('color','white');
    } else
    { 
        $('#AddToFavouriteList').css('color','greenyellow');
        FavouriteWordList.push(FlashCardList[realPosition]);
    }
    // console.log(`FavouriteWordList`, FavouriteWordList);
    $("#Review-wordList").val(FavouriteWordList).trigger("change.select2");
   
    savePresToLocalStorage();        
    // console.log(`myTimer.cleared`,myTimer);
});