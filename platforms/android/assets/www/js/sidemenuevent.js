document.getElementById("menubtnid").addEventListener("click", menubtnid);
// document.getElementById("mainframeid").addEventListener("click", menubtnid);
document.getElementById("logoutbtnid").addEventListener("click", logoutbtnid);

document.getElementById("cartbtnid").addEventListener("click", cartbtnid);

document.getElementById("aboutmebtnid").addEventListener("click", aboutmebtnid);

function menubtnid()
{
  document.getElementById('mainframeid').src="index2.html";
}
function logoutbtnid()
{
  window.localStorage.setItem("totalPrice", "0")
  window.location.href = "index.html";
}
function cartbtnid()
{
  document.getElementById('mainframeid').src="cart.html";

}
function aboutmebtnid()
{
  document.getElementById('mainframeid').src="ourteam.html";
}
