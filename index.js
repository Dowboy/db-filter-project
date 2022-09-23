const returnButton = document.querySelector(".return");
const header = document.querySelector(".anime__header--title");
const episodeFilter = document.querySelector(".episode__filter--wrapper");
const filterSelect = document.querySelector("#filter");
const episodeFilterSelector = document.querySelector("#episode-filter");
let filteredEpisodes;

function notAvailable() {
  alert("Feature not available");
}

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// pass in filter parameter for when we decide to filter the episodes
function renderEpisodes(filter, episodeFilter) {
  // Accessing episodes div in HTML
  const episodesWrapper = document.querySelector(".episodes");

  // Storing array of objects inside "episodes" variable
  let episodes = getEpisodes();
  console.log(episodes);

  if (filter === "DBZ") {
    filteredEpisodes = episodes.filter(
      (episode) => episode.anime === "Dragon Ball Z"
    );
    episodes = filteredEpisodes;
    header.innerHTML = "Dragon Ball Z";
  } else if (filter === "DBS") {
    filteredEpisodes = episodes.filter(
      (episode) => episode.anime === "Dragon Ball Super"
    );
    episodes = filteredEpisodes;
    header.innerHTML = "Dragon Ball Super";
  } else if (filter === "DBGT") {
    filteredEpisodes = episodes.filter(
      (episode) => episode.anime === "Dragon Ball GT"
    );
    episodes = filteredEpisodes;
    header.innerHTML = "Dragon Ball GT";
  } else if (filter === "DB") {
    filteredEpisodes = episodes.filter(
      (episode) => episode.anime === "Dragon Ball"
    );
    episodes = filteredEpisodes;
    header.innerHTML = "Dragon Ball";
  } else if (filter === "DBH") {
    filteredEpisodes = episodes.filter(
      (episode) => episode.anime === "Dragon Ball Heroes"
    );
    episodes = filteredEpisodes;
    header.innerHTML = "Dragon Ball Heroes";
  }

  // Sorting episodes from selected anime (using second parameter of this function)
  if (episodeFilter) {
    episodes = episodeFilter;
  }

  // Dynamic Outputting Data from stored variable
  const episodesHTML = episodes
    .map((episode) => {
      return `<div class="episode" onclick="notAvailable()">
        <figure class="episode__img--wrapper">
            <img class="episode__img" src="${episode.url}" alt="">
        </figure>
        <p class="episode__anime">${episode.anime}</p>
        <p class="episode__episode">Episode ${episode.episode}</p>
    </div>`;
    })
    .join("");
  // YOURE SUPPOSED TO JOIN TO MAKE IT A STRING TO PASS INTO
  // THE INNER HTML, NOT THE ARRAY IT INTIALLY IS

  episodesWrapper.innerHTML = episodesHTML;
}

function resetEpisodes() {
  renderEpisodes();
  header.innerHTML = "All Episodes";
  returnButton.classList.remove("return--appear");
  episodeFilter.classList.remove("episode__filter--wrapper-visible");
  // resets filter select
  filterSelect.selectedIndex = 0;
}

// sorting episodes function that is passed in as a parameter to renderEpisodes() function
function episodeFilterSelect(event) {
  if (event.target.value === "HIGH_TO_LOW") {
    filteredEpisodes.sort((a, b) => b.episode - a.episode);
  } else if (event.target.value === "LOW_TO_HIGH") {
    filteredEpisodes.sort((a, b) => a.episode - b.episode);
  }
  renderEpisodes(undefined, filteredEpisodes);
}

function filterEpisodes(event) {
  // running renderEpisodes function with parameter to filter
  renderEpisodes(event.target.value);
  // reset episode filter option
  episodeFilterSelector.selectedIndex = 0;
  episodeFilter.classList += " episode__filter--wrapper-visible";
  setTimeout(() => {
    returnButton.classList.add("return--appear");
  }, 1000);
}

// need to setTimeout because javascript loads faster than HTML
// so you'll get null if it runs without a timeout
setTimeout(() => {
  renderEpisodes();
});

function getEpisodes() {
  return [
    {
      id: 1,
      episode: 1,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 2,
      episode: 2,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 3,
      episode: 3,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 4,
      episode: 4,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 5,
      episode: 5,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 6,
      episode: 6,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 7,
      episode: 7,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 8,
      episode: 8,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 9,
      episode: 9,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 10,
      episode: 10,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 11,
      episode: 11,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 12,
      episode: 12,
      anime: "Dragon Ball Super",
      url: "assets/dbs.jpg",
    },
    {
      id: 13,
      episode: 1,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 14,
      episode: 2,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 15,
      episode: 3,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 16,
      episode: 4,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 17,
      episode: 5,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 18,
      episode: 6,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 19,
      episode: 7,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 20,
      episode: 8,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 21,
      episode: 9,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 22,
      episode: 10,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 23,
      episode: 11,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 24,
      episode: 12,
      anime: "Dragon Ball Z",
      url: "assets/dbz.jpg",
    },
    {
      id: 25,
      episode: 1,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 26,
      episode: 2,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 7,
      episode: 3,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 28,
      episode: 4,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 29,
      episode: 5,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 30,
      episode: 6,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 31,
      episode: 7,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 32,
      episode: 8,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 33,
      episode: 9,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 34,
      episode: 10,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 35,
      episode: 11,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 36,
      episode: 12,
      anime: "Dragon Ball GT",
      url: "assets/dbgt.jpg",
    },
    {
      id: 37,
      episode: 1,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 38,
      episode: 2,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 39,
      episode: 3,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 40,
      episode: 4,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 41,
      episode: 5,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 42,
      episode: 6,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 43,
      episode: 7,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 44,
      episode: 8,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 45,
      episode: 9,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 46,
      episode: 10,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 47,
      episode: 11,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 48,
      episode: 12,
      anime: "Dragon Ball",
      url: "assets/db.jpg",
    },
    {
      id: 49,
      episode: 1,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 50,
      episode: 2,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 51,
      episode: 3,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 52,
      episode: 4,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 53,
      episode: 5,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 54,
      episode: 6,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 55,
      episode: 7,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 56,
      episode: 8,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 57,
      episode: 9,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 58,
      episode: 10,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 59,
      episode: 11,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
    {
      id: 60,
      episode: 12,
      anime: "Dragon Ball Heroes",
      url: "assets/dbh.jpg",
    },
  ];
}
