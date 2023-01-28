const loginsystem = () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user == "admin" && pass == "123") {
    alert("Hello Admin");
  } else if (user == "robert" && pass == "234") {
    alert("mana ayangmu bang?");
  } else if (user == "edson" && pass == "345") {
    alert("masih fokus!");
  } else if (user == "eka" && pass == "456") {
    alert("lagi nyari cewe baru");
  } else if (user == "prama" && pass == "567") {
    alert("pasti lagi main game tuh!");
  } else {
    alert("You Are Not Admin!");
  }
};
