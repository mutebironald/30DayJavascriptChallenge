const names = require("district-scrapper");

function returnDist(names) {
  return names.path
    .then(districts => console.log(districts))
    .catch(error => {
      console.log("####### error: ", error);
    });
}

returnDist(names);




