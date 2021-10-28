function storeclickeditem(item){
    console.log(item);
    localStorage.setItem("clicked",item);
    console.log(localStorage.getItem("clicked"));

}
/*
function getcliceddesc(item){
    clickeddesc = localStorage.setItem("clicked");
    clickeddesc = "desc" + clickeddesc + ".txt";
    console.log(clickeddesc)
}
*/
let myArray =[];

let myObject = { id: "1" , price : "19" ,size:"10"}
let priceArray = [ 200 , 150 , 190 , 220 ,290 , 300, 160 , 250 , 170 , 270 , 180 , 2000]
let sizeArray = ["100ml" ,"100ml" , "150ml" ,"80ml" ]
function addClickedCart(item )
{
    //counter++;
   // console.log("Number of product in the Cart "+counter);
    //localStorage.setItem("takeToCart", counter)
    //alert(' Item Add To The Cart !!');

    myObject.id = item;
    myObject.price=priceArray[item-1];
    myObject.size=sizeArray[item-1];
    //console.log(myObject);
 
    myArray.push({"id":item, "price":priceArray[item-1] ,"size":sizeArray[item-1]});

    for(i=0;i<myArray.length;i++){
        console.log("myArray "+i+" is ",myArray[i]);
    }

    localStorage.setItem("prodectInCart",JSON.stringify(myArray));

    //window.open('productedetele.html', '_blank') ;
    function displayEachItem(id){
        console.log("inside display each item. id is "+ id);
        source = "img"+id+" .jpg";
        console.log(source);
        let myDiv = '<div class="main_image"> <img id="img" whith="200" src='+source+' > </div>';
        document.getElementById("displayDiv").innerHTML+= myDiv;
    }    
}

function welcome(){
alert("welcome to perfume website")
}

function carty(){
alert("add to your cart")
}