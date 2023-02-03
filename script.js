document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#countries");
  // const selectDrop = document.getElementById('countries');

  fetch("https://www.worldometers.info/geography/alphabetical-list-of-countries/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((country) => {
        output += `
      <option value="${country.name}">${country.name}</option>`;
      });
      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});
