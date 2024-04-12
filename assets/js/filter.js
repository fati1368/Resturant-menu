function NewElement(NameArray) {
  var list = document.getElementById("filter-list");
  list.innerHTML = "<div></div>";

  NameArray.map(function (item, i) {
    var LiElement = document.createElement("LI");
    LiElement.setAttribute("class", "flex col-1 align-center");
    LiElement.innerHTML =
      "<div><img src= " +
      item.pic +
      " " +
      "/></div>" +
      "<div class='text' ><h3>" +
      item.Name +
      "</h3><p>" +
      item.description +
      "</p> <h2> قیمت: " +
      item.price +
      "</h2></div>";
    list.appendChild(LiElement);
  });
  return;
}

function MyFilter(check) {
  if (check === "all") {
    NewElement(ItemList);
    return;
  }
  if (check === "MainMenu") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type == "MainMenu";
    });
    NewElement(newArray);
    return;
  }
  if (check === "FastFood") {
    let newArray = ItemList.filter(function (ItemList) {
      return ItemList.Type == "FastFood";
    });
    NewElement(newArray);
    return;
  }
}
