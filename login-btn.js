let checkimg = document.querySelector("#check");

checkimg.onclick = function () {
  let checksrc = checkimg.getAttribute('src');
  if (checksrc === "./img/icon_check_empty.png"){
    check.setAttribute('src',"./img/icon_check.png");
  }
  else {
    check.setAttribute('src', "./img/icon_check_empty.png")
  }
}