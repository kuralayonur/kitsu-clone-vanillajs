let categories;

setCategoriesToUI();
async function getCategories() {
  let categories;
  await fetch(
    "  https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count"
  )
    .then((response) => response.json())
    .then((data) => (categories = data));
  return categories.data;
}

async function setCategoriesToUI() {
  categories = await getCategories();
  let categoriesListElement =
    document.getElementsByClassName("categories-list")[1];
  categories.forEach((element) => {
    categoriesListElement.appendChild(
      createListItems(element.attributes.title)
    );
  });
}

function createListItems(title) {
  let categoriesListItemLi = document.createElement("li");
  let categoriesListItemATag = document.createElement("a");
  categoriesListItemATag.setAttribute("href", title);
  categoriesListItemATag.textContent = title;
  categoriesListItemLi.appendChild(categoriesListItemATag);
  return categoriesListItemLi;
}

{
  /* <ul class="categories-list">
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
<li class=""><a href="#">Dummy</a></li>
</ul>
<div class="show-details-link">
<div></div>
<a href="#">More Categories...</a>
</div> */
}
