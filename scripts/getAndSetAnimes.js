let request = new XMLHttpRequest();
let mainContextLeft = document.querySelector(".main-context-left");
let trendingAnimesLink = "https://kitsu.io/api/edge/trending/anime?limit=5";
let mostViewedAnimesLink =
  "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count";
let mostViewedAnimeTBRSLink =
  "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count";

let topRatedAnimesLink =
  "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating";
let mostPopularAnimesLink =
  "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count";

setData(getData(trendingAnimesLink), "trendinganimes");
setData(getData(mostViewedAnimesLink), "mostviewedanimes");
setData(getData(mostViewedAnimeTBRSLink), "mostViewedAnimeTBRSLink");
setData(getData(topRatedAnimesLink), "topratedanimes");
setData(getData(mostPopularAnimesLink), "mostpopularanimes");

async function setData(animes, title) {
  let datas;
  let topicDiv = createDivElement("topic");
  mainContextLeft.appendChild(topicDiv);
  let headerTitle = document.createElement("h6");
  headerTitle.appendChild(decideTitle(title));
  appendChildToParent(topicDiv, headerTitle);
  let posterRowDiv = createDivElement("poster-row");
  appendChildToParent(topicDiv, posterRowDiv);
  await animes.then((result) => (datas = result.data));
  datas.forEach((element) => {
    let posterItemDiv = createDivElement("poster-item");
    appendChildToParent(posterRowDiv, posterItemDiv);
    let posterItemContentDiv = createDivElement("poster-item-content");
    appendChildToParent(posterItemDiv, posterItemContentDiv);
    let imageLink = document.createElement("a");
    imageLink.href = element.id;
    let imageLinkImg = document.createElement("img");
    imageLinkImg.setAttribute("id", "poster-image");
    imageLinkImg.setAttribute("src", element.attributes.posterImage.medium);
    appendChildToParent(imageLink, imageLinkImg);
    appendChildToParent(posterItemContentDiv, imageLink);
    let addToLibraryButton = document.createElement("button");
    addToLibraryButton.setAttribute("id", "poster-item-button");
    addToLibraryButton.textContent = "Add to Library";
    appendChildToParent(posterItemContentDiv, addToLibraryButton);
    let posterItemInfoContainerDiv = createDivElement(
      "poster-item-info-container"
    );
    let posterItemInfoDiv = createDivElement("poster-item-info");
    let posterItemInfoHeader = createDivElement("poster-item-info-header");
    let animeYearSpan = document.createElement("span");
    let animeNameSpan = document.createElement("span");
    animeNameSpan.setAttribute("id", "piih-anime-name");
    animeYearSpan.setAttribute("id", "piih-anime-year");
    animeYearSpan.textContent = element.attributes.startDate.substring(0, 4);
    for (let x in element.attributes.titles) {
      if (typeof element.attributes.titles.en != "undefined") {
        animeNameSpan.textContent = element.attributes.titles.en;
      } else if (typeof element.attributes.titles.en_jp != "undefined") {
        animeNameSpan.textContent = element.attributes.titles.en_jp;
      } else if (typeof element.attributes.titles.ja_jp != "undefined") {
        animeNameSpan.textContent = element.attributes.titles.ja_jp;
      }
    }
    appendChildToParent(posterItemInfoHeader, animeNameSpan);
    appendChildToParent(posterItemInfoHeader, animeYearSpan);
    let animeRateSpan = document.createElement("span");
    animeRateSpan.setAttribute("id", "piih-anime-rate");
    animeRateSpan.textContent = "%" + element.attributes.averageRating;
    appendChildToParent(posterItemInfoDiv, posterItemInfoHeader);
    appendChildToParent(posterItemInfoDiv, animeRateSpan);
    let posterItemInfoLikesDiv = createDivElement("poster-item-info-likes");
    let posterItemInfoLikesDivImg = document.createElement("img");
    posterItemInfoLikesDivImg.setAttribute(
      "src",
      "https://img.icons8.com/color/16/000000/like--v3.png"
    );
    appendChildToParent(posterItemInfoLikesDiv, posterItemInfoLikesDivImg);
    let popularitySpan = document.createElement("span");
    popularitySpan.setAttribute("id", "likes-popularity");
    popularitySpan.textContent =
      "#" + element.attributes.popularityRank + " Most Popular";
    appendChildToParent(posterItemInfoLikesDiv, popularitySpan);
    let posterItemInfoLikesRightDiv = createDivElement(
      "poster-item-info-likes-right"
    );
    let posterItemInfoLikesRightDivImg = document.createElement("img");
    posterItemInfoLikesRightDivImg.setAttribute(
      "src",
      "https://img.icons8.com/fluency/16/000000/star.png"
    );
    let posterItemInfoLikesRightDivSpan = document.createElement("span");
    posterItemInfoLikesRightDivSpan.setAttribute("id", "likes-rate");
    if (element.attributes.ratingRank != null) {
      posterItemInfoLikesRightDivSpan.textContent =
        "#" + element.attributes.ratingRank + " Highest Rated";
      appendChildToParent(
        posterItemInfoLikesRightDiv,
        posterItemInfoLikesRightDivImg
      );
      appendChildToParent(
        posterItemInfoLikesRightDiv,
        posterItemInfoLikesRightDivSpan
      );
    } else {
      posterItemInfoLikesRightDivSpan.textContent =
        "#" + element.attributes.ratingRank + " Highest Rated";
      appendChildToParent(
        posterItemInfoLikesRightDiv,
        posterItemInfoLikesRightDivImg
      );
      appendChildToParent(
        posterItemInfoLikesRightDiv,
        posterItemInfoLikesRightDivSpan
      );
    }

    appendChildToParent(posterItemInfoLikesDiv, posterItemInfoLikesRightDiv);
    let posterItemAnimeSummary = createDivElement("poster-item-anime-summary");
    let posterItemAnimeSummarySpan = document.createElement("span");
    posterItemAnimeSummarySpan.setAttribute("id", "pias-span");

    if (element.attributes.description != null) {
      posterItemAnimeSummarySpan.textContent =
        element.attributes.description.substring(0, 365);
    } else
      posterItemAnimeSummary.textContent =
        "No statement has been made about this anime.";
    appendChildToParent(posterItemAnimeSummary, posterItemAnimeSummarySpan);

    appendChildToParent(posterItemInfoDiv, posterItemInfoLikesDiv);
    appendChildToParent(posterItemInfoDiv, posterItemAnimeSummary);
    appendChildToParent(posterItemInfoContainerDiv, posterItemInfoDiv);

    appendChildToParent(posterItemDiv, posterItemInfoContainerDiv);
  });
}

function appendChildToParent(parent, child) {
  parent.appendChild(child);
}

function decideTitle(title) {
  let headerTitleText;
  if (title === "trendinganimes") {
    headerTitleText = document.createTextNode("Trending Animes");
    return headerTitleText;
  } else if (title === "mostviewedanimes") {
    headerTitleText = document.createTextNode("Most Viewed Animes");
    return headerTitleText;
  } else if (title === "mostViewedAnimeTBRSLink") {
    headerTitleText = document.createTextNode(
      "Most Viewed Anime To Be Released Soon"
    );
    return headerTitleText;
  } else if (title === "topratedanimes") {
    headerTitleText = document.createTextNode("Top Rated Anime");
    return headerTitleText;
  } else if (title === "mostpopularanimes") {
    headerTitleText = document.createTextNode("Most Popular Anime");
    return headerTitleText;
  }
}

function createDivElement(className) {
  let div = document.createElement("DIV");
  div.classList.add(className);
  return div;
}

async function getData(a) {
  let animes;
  await fetch(a)
    .then((response) => response.json())
    .then((data) => (animes = data));
  return animes;
}
