let PronunciationListArray = [];

$.getJSON('./pronunciation/pronunciation_data.json', function (json) {
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            PronunciationListArray.push({
                Phonetic_Alphabet: item.Phonetic_Alphabet,
                Example: item.Example,
                Color: item.Color,
                Link: item.Link,
            });           
        }
    }
    console.log(`load xong IPA`, PronunciationListArray);
});

function loadPronunicationDiv()
    {
        for (var i=0;i<12;i++)   
        $("#pronunSectionLeft").append(`<a class="` + PronunciationListArray[i].Color + `"" href="` + PronunciationListArray[i].Link + `" data=` + PronunciationListArray[i].Phonetic_Alphabet + `>` + PronunciationListArray[i].Phonetic_Alphabet + `<br><span>` + PronunciationListArray[i].Example + `</span></a>`);
        for (var i=20;i<PronunciationListArray.length;i++)   
        $("#pronunSectionRight").append(`<a class="` + PronunciationListArray[i].Color + `"" href="` + PronunciationListArray[i].Link + `" data=` + PronunciationListArray[i].Phonetic_Alphabet + `>` + PronunciationListArray[i].Phonetic_Alphabet + `<br><span>` + PronunciationListArray[i].Example + `</span></a>`);
        for (var i=12;i<20;i++)   
        $("#pronunSectionBottom").append(`<a class="` + PronunciationListArray[i].Color + `"" href="` + PronunciationListArray[i].Link + `" data=` + PronunciationListArray[i].Phonetic_Alphabet + `>` + PronunciationListArray[i].Phonetic_Alphabet + `<br><span>` + PronunciationListArray[i].Example + `</span></a>`);
        
    }