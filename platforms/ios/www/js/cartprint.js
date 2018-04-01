
function onLoad()
{
  document.getElementById("numberitemid").innerHTML = window.localStorage.getItem("totalItem");
  document.getElementById("subtotalid").innerHTML = window.localStorage.getItem("totalPrice");

  var withHST = parseInt(window.localStorage.getItem("totalPrice")) * 0.13;

  document.getElementById("hstonlyid").innerHTML = withHST;
  var finalamount = parseInt(window.localStorage.getItem("totalPrice")) + withHST;

  document.getElementById("finalprint").innerHTML = finalamount;

}
