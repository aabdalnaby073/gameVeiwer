var nameinput = document.getElementById("productName")
var priceinput = document.getElementById("productPrice")
var categoryinput = document.getElementById("productCategory")
var saleinput = document.getElementById("productSale")
var descinput = document.getElementById("productDescription")

var productList = []

if (localStorage.getItem("data") != null) {
    productList = JSON.parse(localStorage.getItem("data"))
    display()
}
function addProduct() {
    var product = {
        name: nameinput.value,
        price: priceinput.value,
        category: categoryinput.value,
        saleinput: saleinput.checked,
        dec: descinput.value,
    }

    productList.push(product);
    localStorage.setItem("data", JSON.stringify(productList));
    display();
    clearform()
}


function display() {
    var temp = ""
    for (var i = 0; i < productList.length; i++) {
        temp += `<tr>
                    <td>`+ i + `</td>
                    <td> `+ productList[i].name + `</td>
                    <td>`+ productList[i].price + `</td>
                    <td>`+ productList[i].category + `</td>
                    <td>`+ productList[i].saleinput + `</td>
                    <td>`+ productList[i].dec + `</td>
                    <td> <button class="btn btn-warning"> Update</button> </td>
                    <td> <button onclick="deleteItem(`+ i + `)" class="btn btn-danger"> Delete</button> </td>
                </tr>`
    }
    document.getElementById("myData").innerHTML = temp;
}


function deleteItem(i) {
    productList.splice(i, 1)
    localStorage.setItem("data", JSON.stringify(productList))
    display()
}


function clearform ()
{
    nameinput.value = ""
    priceinput.value = ""
    categoryinput.value = "Tv"
    saleinput.value = false 
    descinput.value = ""
}