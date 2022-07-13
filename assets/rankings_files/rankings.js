const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e65da03b5bmsh17fef234819a948p15c174jsnd0f8c32a3add",
    "X-RapidAPI-Host": "current-ufc-rankings.p.rapidapi.com",
  },
};

let fightersRating = document.querySelector("#fighters");
fetch("https://current-ufc-rankings.p.rapidapi.com/", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response[0].fighters[0].url);
    // ------------------------ loop section pound for pound ------------------------ //

    document.querySelector(
      "#rankings"
    ).innerHTML = /* html */ `<div><h1 class="text-light">${response[0].weightClass} :</h1>`;
    for (let i = 0; i < 8; i++) {
      document.querySelector("#rankings").innerHTML += /* html */ `<ul>
      <li class="text-white list-unstyled p-3 fs-4">${response[0].fighters[i].fullName}<a class="ps-2" href="${response[i].fighters[i].url}"><button class="btn bg-light">more information</button></a></li>
      </ul>`;
    }
    // ------------------------ loop section flyweight ------------------------ //
    document.querySelector(
      "#fighters"
    ).innerHTML = /* html */ `<div><h1 class="text-light">${response[1].weightClass} :</h1>`;
    for (let i = 0; i < 8; i++) {
      document.querySelector("#fighters").innerHTML += /* html */ `<ul>
      <li class="text-white list-unstyled p-3 fs-4">${response[1].fighters[i].fullName}<a class="ps-2" href="${response[i].fighters[i].url}"><button class="btn  bg-light">more information</button></a></li>
      </ul>`;
    }
  });
