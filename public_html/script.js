/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var i = 0;
var imgLen = 7;
function nxt(){               
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
                if(i < imgLen-1)
                    i++;
                else
                    i=0; 
                document.getElementById("imge").src = myObj.allProducts[i].image_path;
                document.getElementById("pinfo").innerHTML = myObj.allProducts[i].product_description;
                document.getElementById("sinfo").innerHTML = myObj.allProducts[i].shipping_details;
                document.getElementById("crev").innerHTML = myObj.allProducts[i].customer_reviews;
        }
    };
    xhttp.open("GET", "guitardata1.txt", true);
    xhttp.send();
}    
function prvs(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
                if(i > 0)
                    i--;
                else
                    i = imgLen-1;
            document.getElementById("imge").src = myObj.allProducts[i].image_path;
            document.getElementById("pinfo").innerHTML = myObj.allProducts[i].product_description;
            document.getElementById("sinfo").innerHTML = myObj.allProducts[i].shipping_details;
            document.getElementById("crev").innerHTML = myObj.allProducts[i].customer_reviews;
        }
    };
    xhttp.open("GET", "guitardata1.txt", true);
    xhttp.send();
}
    
function validate() {
    var x = document.forms["myForm"]["fn"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
}

function buy (){
     var input = document.getElementById("imageshow");
     localStorage.setItem("imageshow",input.innerHTML);
};

function getItem() {
    document.getElementById("im").innerHTML = localStorage.getItem("imageshow");
    console.log(localStorage.getItem("imageshow"));
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
                        document.getElementById("price").innerHTML = myObj.allProducts[i].price;
                        document.getElementById("items").innerHTML = myObj.allProducts[i].no_of_items;
                        document.getElementById("avail").innerHTML = myObj.allProducts[i].stock_availability;
                    }
                };
            xhttp.open("GET", "guitardata1.txt", true);
            xhttp.send();
    
};
function review(){
     var inputFn= document.getElementById("fn");
     localStorage.setItem("fn", inputFn.value);
     var inputLn= document.getElementById("ln");
     localStorage.setItem("ln", inputLn.value);
     var inputNum= document.getElementById("number");
     localStorage.setItem("number", inputNum.value);
     var inputEmail= document.getElementById("email");
     localStorage.setItem("email", inputEmail.value);
     document.getElementById("rev1").innerHTML = localStorage.getItem("fn");
     document.getElementById("rev2").innerHTML = localStorage.getItem("ln");
     document.getElementById("rev3").innerHTML = localStorage.getItem("number");
     document.getElementById("rev4").innerHTML = localStorage.getItem("email");

};