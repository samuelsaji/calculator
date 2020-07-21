function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function clearDisplay(){
    document.getElementById("screen").value=""
}

function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function onPressBackspace() {
    myTextarea.value = myTextarea.value.substring(0, myTextarea.value.length - 1);
}