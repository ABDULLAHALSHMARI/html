//function shop(item){
//cartArray=localStorage.getItem("item")
//cartArray=cartArray.split(",")}
//Array=[{1,100}, {}]
let carty = JSON.parse(localStorage.getItem("prodectInCart"));
function displayCartItem ()
{

    for(i=0;i<carty.length;i++){
        console.log("Cart "+i+" is ",carty[i]);
        console.log(carty[i].id)
       
    }
    
    

}
displayCartItem();


//to display into html
 function displayHtmlCart()
     {
        for (let i=0 ; i< carty.length ; i++)
        {
       
            document.getElementById("para").innerHTML += "Selected item id is "+carty[i].id+"<br>";
            document.getElementById("para").innerHTML += "Selected item price is "+carty[i].price+"<br>";

            var img = new Image();
            img.src = "img/img"+carty[i].id+".jpg";

            document.getElementById('body').appendChild(img);
        }
     }
     displayHtmlCart();
     
     function addetion(){
     let total=1;    
        for(let i=1;i<cartproduct.length;i++){
            total=total+Number(cartproduct(i).price)
        total=total+20;
    }
     document.getElementById("addId").innerHTML=("update your total is="+total);
        }
        addetion();

        function delevir(){
            alert("your referince number 1249764354 ,NO QUESTION?!!! ,And thanks")
        }