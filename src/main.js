import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".search-form");
const postsGallery = document.querySelector(".gallery");


function handleSubmit(event) {

    event.preventDefault();

    const query = event.target.elements.searchQuery.value.trim();

    getPosts(query).then(data => {

        const markup = postsTemplate(data.hits);

        postsGallery.insertAdjacentHTML("beforeend", markup);
        const lightbox = new SimpleLightbox(".gallery a")
        lightbox.refresh();
    })
}

form.addEventListener("submit", handleSubmit)

function getPosts(searchQuery) {

    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api";
    const params = new URLSearchParams({
        key: "44024733-f77ed4f0ed7e81c67856c8782",
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url)
        .then(respond => respond.json());
};

function postTemplate(post) {
    return `
        <li class="gallery-item">
            <a href="${post.largeImageURL}">
                <img src="${post.webformatURL}" alt="${post.tags}" class="gallery-item-image">
                <div class="info">
                    <p class="info-title">Likes:<span class="info-value">${post.likes}</span></p>
                    <p class="info-title">Views:<span class="info-value">${post.views}</span></p>
                    <p class="info-title">Comments:<span class="info-value">${post.comments}</span></p>
                    <p class="info-title">Downloads:<span class="info-value">${post.downloads}</span></p>
                </div>
            </a>
        </li>
    `
};

function postsTemplate(arr) {
    return arr.map(postTemplate).join("");
};
