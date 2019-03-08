var logo = document.querySelectorAll("#logo path");
console.log(logo.length/2);
for (var i = 0; i < logo.length/2; i++) {

  console.log("each path " + logo[i].getTotalLength());
}
