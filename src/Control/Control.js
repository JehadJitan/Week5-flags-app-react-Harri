/*
  Drag & Drop Functions
*/
function dragstartHandler(ev) {
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  const tempCountry2 = tempCountry.find((country) => {
    return country.name.common === ev.target.id;
  });
  ev.dataTransfer.setData("countryName", tempCountry2.name.common);
  ev.dataTransfer.setData("countryFlag", tempCountry2.flags.svg);
}

function dropHandler(ev) {
  if (
    favouritesArray.some(
      (favourite) => favourite.name === ev.dataTransfer.getData("countryName")
    )
  ) {
    return;
  }
  favouritesArray.push({
    name: ev.dataTransfer.getData("countryName"),
    flag: ev.dataTransfer.getData("countryFlag"),
  });
  localStorage.setItem("favouriteCoutries", JSON.stringify(favouritesArray));
  renderFavourites();
  document
    .getElementById(`icon-${ev.target.id}`)
    .classList.toggle("changeColor");
  ev.preventDefault();
  const data = event.dataTransfer.items;
}

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

function dragendHandler(ev) {
  const dataList = ev.dataTransfer.items;
  for (let i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  dataList.clear();
}
