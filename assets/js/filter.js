function AllElement(NameArray) {
  var list = document.getElementById("filter-list");
  document.querySelector(".item ul").classList.remove("col-1");
  list.innerHTML = "<div></div>";
  NameArray.map(function (item, i) {
    var LiElement = document.createElement("LI");
    LiElement.setAttribute("class", "flex col-1 align-center");
    var currency = new Intl.NumberFormat("de-DE").format(item.price);
    LiElement.innerHTML =
      "<div ><img class='animation-4' src= " +
      item.pic +
      " " +
      "/></div>" +
      "<div class='text animation-1' ><h3>" +
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
      "<div class='text flex current' ><h4 class='current title' >" +
      item.Name +
      "</h4> <h2 class='current' > ................................................ </h2> <h2 class='current' >" +
      " قیمت:  Rial " +
      currency +
      " </h2></div>";
    list.appendChild(LiElement);
  });
  return;
}
function animation(direction, picture) {
  if (direction === "right") {
    document.getElementById("right").style.display = "flex";
    document.getElementById("left").style.display = "none";
    var image = document.querySelector("#right");
    image.innerHTML = '<img class="animation-3" src=' + picture + " / >";
    return;
  }
  if (direction === "left") {
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "flex";
    var image = document.querySelector("#left");
    image.innerHTML = '<img class="animation-2" src=' + picture + " / >";
    return;
  }
}
function MyFilter(check) {
  if (check === "all") {
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";
    AllElement(ItemList);
    return;
  }
  if (check === "MainMenu") {
    animation("right", "assets/pic/new/morgh.png");
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "MainMenu";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "FastFood") {
    animation("left", "assets/pic/new/pizza.png");
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "FastFood";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "Appetizer") {
    animation("left", "assets/pic/new/sezaaar.webp");
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "Appetizer";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "Deser") {
    animation("right", "assets/pic/new/desert.png");
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "Deser";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "cold") {
    animation("right", "assets/pic/new/colddd.jpg");
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "cold";
    });
    FilterElement(newArray);
    return;
  }
  if (check === "warm") {
    animation("left", "assets/pic/new/cafe.webp");
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "warm";
    });
    FilterElement(newArray);
    return;
  }
}
