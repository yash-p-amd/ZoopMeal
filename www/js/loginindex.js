document.getElementById("lostbtn").addEventListener("click", lostbtn);
document.getElementById("loginbtn").addEventListener("click", loginbtn);

function lostbtn()
{
  alert("Username : NewAdmin Password : 123456");
  window.location.href = "index1.html";

}

function loginbtn()
{
  alert("Username : NewAdmin Password : 123456");

  var login-name = document.getElementById("login-nameid").value;
  var login-pass = document.getElementById("login-passid").value;
  window.location.href = "index1.html";

  if(login-name == "A" && login-pass == "1")
  {
    alert("This Is New Notification");
  }
}
