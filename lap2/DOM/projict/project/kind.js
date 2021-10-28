let clickeditem;

function getclicedprodcet(){
    clickeditem=localStorage.getItem("clicked");
    clickeditem="img/img"+ clickeditem +".jpg";
    console.log(clickeditem);
}
getclicedprodcet();

function displayimg(){
    document.getElementById("img1").src=clickeditem;
}
displayimg();


function addClickedCart(item )
{
    counter++;
    console.log("Number of product in the Cart "+counter);
    localStorage.setItem("takeToCart", counter)
    //alert(' Item Add To The Cart !!');

    myObject.id = item;
    myObject.price=priceArray[item-1];
    console.log(myObject);
 
    myArray.push({"id":item, "price":priceArray[item-1]});

    for(i=0;i<myArray.length;i++){
        console.log("myArray "+i+" is ",myArray[i]);
    }

    localStorage.setItem("prodectInCart",JSON.stringify(myArray));

    //window.open('productedetele.html', '_blank') ;
    
}

