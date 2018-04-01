document.getElementById("f1").addEventListener("click", f1);
document.getElementById("f2").addEventListener("click", f2);
document.getElementById("f3").addEventListener("click", f3);
document.getElementById("f4").addEventListener("click", f4);
document.getElementById("f5").addEventListener("click", f5);
document.getElementById("f6").addEventListener("click", f6);
document.getElementById("f7").addEventListener("click", f7);
document.getElementById("f8").addEventListener("click", f8);
document.getElementById("f9").addEventListener("click", f9);
document.getElementById("f10").addEventListener("click", f10);
function f1()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 12;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);

  alert("Item has been added to your cart");


}
function f2()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 7.50;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);

  alert("Item has been added to your cart");

}
function f3()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 9;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);

  alert("Item has been added to your cart");

}
function f4()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 15;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);

  alert(total);
  alert("Item has been added to your cart");

}
function f5()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 20;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);

  alert("Item has been added to your cart");

}
function f6()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 12;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);

  alert("Item has been added to your cart");

}
function f7()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 16;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);
  alert("Item has been added to your cart");

}
function f8()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 11;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);
  alert("Item has been added to your cart");

}
function f9()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 10;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);
  alert("Item has been added to your cart");

}
function f10()
{
  var total =  parseInt(window.localStorage.getItem("totalPrice"))  + 22;
  window.localStorage.setItem("totalPrice", total);

  var qun =  parseInt(window.localStorage.getItem("totalItem")) + 1;
  window.localStorage.setItem("totalItem", qun);
  alert("Item has been added to your cart");

}
