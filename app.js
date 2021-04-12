var btnTranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
// var severURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//  var serverURL="https://api.funtranslations.com/translate/minion.json"
 var serverURL="https://api.funtranslations.com/translate/oldenglish.json"
	

// fetch(url)
// .then(function responseHandler(response){return response.json()})
// .then(function logJSON(json){console.log(json)})"

function getTranslationURL(input)
{
    return serverURL+ "?" +"text=" +input
}
function errorHandler(error)
{
    console.log("error occured" ,error);
    alert("something wrong with server!Try again after some time")

}


function clickHandler(){
    var inputText = txtInput.Value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText = translatedText;
    })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)