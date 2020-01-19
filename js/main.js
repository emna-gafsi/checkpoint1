function Bold()
    {
    var t=document.getElementById("comment");
    if (t.style.fontWeight=="normal"){
        
        t.style.fontWeight="bolder";
    }

    else{
        t.style.fontWeight="normal";
    }

}
  
function italique()
    {
    var t=document.getElementById("comment");
    if (t.style.fontStyle=="normal"){
        
        t.style.fontStyle="italic";
    }

    else{
        t.style.fontStyle="normal";
    }

}
function underline()
    {
    var t=document.getElementById("comment");
    if (t.style.textDecoration=="initial"){
        
        t.style.textDecoration="underline";
    }

    else{
        t.style.textDecoration="initial";
    }

}

function size_change()
{
    var siz= document.getElementById("text_size").value;
    var t=document.getElementById("comment");
    t.style.fontSize = siz;
}
 function font_change(){
    var test= document.getElementById("btn-font-family").value;
    var t=document.getElementById("comment");
    t.style.fontFamily = test;
}