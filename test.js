function setValue(no) {
  const allElements = document.querySelectorAll(".list-group *");

  allElements.forEach((element) => {
    //console.log(element);
    element.classList.remove("selected");
  });
  //$(".list-group-item").

  var element = document.getElementById("clickme_" + no);
  element.classList.add("selected");
  //$('#clickme_'+no).addClass('selected');
}

function openNav() {
  document.getElementById("mySidebar").style.width = "340px";
  document.getElementById("main").style.marginLeft = "340px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
