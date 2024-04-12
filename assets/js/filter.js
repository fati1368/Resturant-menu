function NewElement(NameArray) {
  var list = document.getElementById("filter-list");
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
NewElement(ItemList)
function MyFilter(check) {
  if (check === "all") {
    NewElement(ItemList);
    return;
  }
  if (check === "MainMenu") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "MainMenu";
    });
    NewElement(newArray);
    return;
  }
  if (check === "FastFood") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "FastFood";
    });
    NewElement(newArray);
    return;
  }
  if (check === "Appetizer") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "Appetizer";
    });
    NewElement(newArray);
    return;
  }
  if (check === "Deser") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "Deser";
    });
    NewElement(newArray);
    return;
  }
  if (check === "cold") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "cold";
    });
    NewElement(newArray);
    return;
  }
  if (check === "warm") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type === "warm";
    });
    NewElement(newArray);
    return;
  }
  
}
