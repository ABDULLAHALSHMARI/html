
for(i=0;i<5;i++){
    mykey = localStorage.key(i);
    localStorage.removeItem(mykey)
    
    }
text = "";
for(i=0;i<localStorage.length;i++){
    mykey = localStorage.key(i);
    text =text + localStorage.getItem(mykey) + "<br>";
    
}

document.getElementById("para").innerHTML = text;
