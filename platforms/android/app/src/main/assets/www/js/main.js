"use strict";
const createNode = element => {
  return document.createElement(element);
};
const append = (parent, element) => {
  return parent.appendChild(element);
};
const div = document.getElementById("app");
const url = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=9ab101813113a5997a9c3cb8828c5488";
const imagesrc = "https://image.tmdb.org/t/p/w500";

fetch(url, { mode: "cors" , crossDomain: true})
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code : " + response.status
      );
      return;
    }
    response.json().then(function(data) {
        let popular = data.results;
        return popular.map(movie => {
            let imgDiv = createNode("div"),
                img = createNode("img");
            img.src = imagesrc + movie.poster_path;
            append(imgDiv, img);
            append(div, imgDiv);
            img.style.height = "16em";
        });
        console.log(data);
      });
    })
    .catch(function(error) {
      console.log("fetch error :-S", error);
    });