function handleContactClick() {
  console.log("yam pressed");
  var x = document.getElementById("contactForm");
  console.log(x.style)
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
