function AllElement(NameArray) {
  var list = document.getElementById("filter-list");
  document.querySelector(".item ul").classList.remove("col-1");
  list.innerHTML = "<div></div>";
  NameArray.map(function (item, i) {
    var LiElement = document.createElement("LI");
    LiElement.setAttribute("class", "flex col-1 align-center");
    var currency = new Intl.NumberFormat("de-DE").format(item.price);
    LiElement.innerHTML =
      "<div><img src= " +
      item.pic +
      " " +
      "/></div>" +
      "<div class='text' ><h3>" +
      item.Name +
      "</h3><p>" +
      item.description +
      "</p> <h2> قیمت:  Rial " +
      currency +
      " </h2></div>";
    list.appendChild(LiElement);
  });
  return;
}
AllElement(ItemList);

function FilterElement(NameArray) {
  var list = document.getElementById("filter-list");
  document.querySelector(".item ul").classList.add("col-1");
  list.innerHTML = "<div></div>";
  NameArray.map(function (item, i) {
    var LiElement = document.createElement("LI");
    LiElement.setAttribute("class", "flex list align-center");
    var currency = new Intl.NumberFormat("de-DE").format(item.price);
    LiElement.innerHTML =
      "<div><img src= " +
      item.pic +
      " " +
      "/></div>" +
      "<div class='text' ><h3>" +
      item.Name +
      "</h3><p>" +
      item.description +
      "</p> <h2> قیمت:  Rial " +
      currency +
      " </h2></div>";
    list.appendChild(LiElement);
  });
  return;
}
function MyFilter(check) {
  if (check === "all") {
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";
    AllElement(ItemList);
    return;
  }
  if (check === "MainMenu") {
    document.getElementById("right").style.display = "flex";
    document.getElementById("left").style.display = "none";
    document.querySelector("#right img").src = "assets/pic/new/morgh.png";
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "MainMenu";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "FastFood") {
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "flex";
    document.querySelector("#left img").src = "assets/pic/new/pizza.png";
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "FastFood";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "Appetizer") {
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "flex";
    document.querySelector("#left img").src = "assets/pic/new/sezaaar.webp";
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "Appetizer";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "Deser") {
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "flex";
    document.querySelector("#right img").src = "assets/pic/new/desert.png";
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "Deser";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "cold") {
    document.getElementById("right").style.display = "flex";
    document.getElementById("left").style.display = "none";
    document.querySelector("#right img").src = "assets/pic/new/colddd.jpg";
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "cold";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "warm") {
    document.getElementById("left").style.display = "flex";
    document.getElementById("right").style.display = "none";
    document.querySelector("#left img").src = "assets/pic/new/cafe.webp";
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "warm";
    });
    FilterElement(newArray);
    return;
  }
}
