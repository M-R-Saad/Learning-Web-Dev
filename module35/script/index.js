// Load the Categories from API.
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => makeCategoryButton(data.categories))
        .catch(error => console.log('Error fetching categories:', error));
}


// Display the Categories as Buttons
const makeCategoryButton = (categories) => {

    const categoryContainer = document.getElementById('category-container');

    for (const category of categories) {
        // console.log(category["category"]);

        const div = document.createElement('div');
        div.innerHTML = `
            <label id="${category.category_id}" class="btn border-none bg-gray-300 opacity-70 font-medium text-[18px] category-btn">
                <input type="radio" name="category" value="${category["category"]}" class="hidden" />
                ${category["category"]}
            </label>
        `;

        categoryContainer.appendChild(div);
    }
}

loadCategories();


// Handle Category Button Selection Styling
document.getElementById('category-container').addEventListener('change', function (e) {
    if (e.target && e.target.matches('input[type="radio"][name="category"]')) {
        document.querySelectorAll('.category-btn').forEach(label => {
            label.classList.remove('bg-red-600', 'text-white', 'opacity-100');
            label.classList.add('bg-gray-300', 'opacity-70');
        });
        if (e.target.checked) {
            e.target.parentElement.classList.remove('bg-gray-300', 'opacity-70');
            e.target.parentElement.classList.add('bg-red-600', 'text-white', 'opacity-100');
        }

        if (e.target.value === "All") {
            loadVideos();
            return;
        }
        loadCategoryVideos(e.target.parentElement.id);
    }
});


// Load Videos from the API
const loadVideos = () => {

    showLoader();

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => makeVideoCard(data.videos))
        .catch(error => console.log('Error fetching videos:', error));
}


// Display the Videos as Cards.
const makeVideoCard = (videos) => {

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous videos

    if (videos.length === 0) {
        hideLoader();
        videoContainer.innerHTML = `
            <div class="col-span-full flex flex-col justify-center items-center gap-8 pt-32">
                <img class="" src="assets/Icon.png" alt="">
                <h1 class="text-3xl font-bold text-center">
                    Oops!! Sorry, There is no <br> content here :(
                </h1>
            </div>
        `;
        return;
    }

    for (const video of videos) {
        // console.log(video);

        const verify = video.authors[0].verified ? `assets/verify.png` : '';

        let postedTimeHtml;

        if (video.others.posted_date === "") {
            postedTimeHtml = "";
        }
        else {
            const postedHour = Math.floor(parseInt(video.others.posted_date) / 3600);
            const postedMin = Math.floor((parseInt(video.others.posted_date) / 60) % 60);
            const postedTime = `${postedHour}hrs ${postedMin}min ago`;

            postedTimeHtml = `
                <div class="absolute bottom-27 right-2 bg-black p-1 rounded-[4px]">
                    <p class="text-[10px] text-white">
                        ${postedTime}
                    </p>
                </div>
            `;
        }

        const div = document.createElement('div');
        div.classList.add('flex', 'flex-col', 'gap-5', 'h-auto', 'rounded-md', 'overflow-hidden');
        div.innerHTML = `
            <img class="h-[200px] object-cover" src="${video.thumbnail}" alt="">
            <div class="flex gap-3 relative">
                <img class="w-10 h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                <div class="">
                    <h1 class="font-bold">
                        ${video.title}
                    </h1>

                    <div class="my-2 flex gap-2">
                        <p class="text-sm opacity-70">
                            ${video.authors[0].profile_name}
                        </p>
                        <img src="${verify}" alt="">
                    </div>

                    <p class="text-sm opacity-70">
                        ${video.others.views} Views
                    </p>

                    ${postedTimeHtml}
                </div>
            </div>
            <button onclick="loadVideoDetails('${video.video_id}')" class="btn bg-red-500 text-white border-none">Show Details</button>
        `;


        videoContainer.appendChild(div);
    }

    hideLoader();
}

// Load all videos on clicking All.
document.getElementById('all-category').addEventListener('click',
    function () {
        loadVideos();
    }
);

// Function for displaying videos of selected category.
const loadCategoryVideos = (category) => {
    // console.log(category);
    showLoader();

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${category}`)
        .then(res => res.json())
        .then(data => makeVideoCard(data.category))
        .catch(error => console.log('Error fetching category videos:', error));
}


// Load Video Details
const loadVideoDetails = (video_id) => {
    // console.log(video_id);

    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`)
        .then(res => res.json())
        .then(data => showVideoDetails(data.video))
        .catch(error => console.log('Error fetching video details:', error));
}


// Show the video details in a modal
const showVideoDetails = (video) => {
    console.log(video);

    const detailsContainer = document.getElementById('details-container');

    detailsContainer.innerHTML = `
        <div class="flex flex-col gap-6 items-start">
            <div class="flex">
                <img class="w-[464px] h-auto rounded-lg shadow-lg object-cover" src="${video.thumbnail}" alt="${video.title}">
            </div>
            <div class="flex-1">
                <h3 class="text-2xl md:text-3xl font-bold mb-3 text-gray-800">${video.title}</h3>
                <p class="mb-4 text-gray-600">${video.description || 'No description available.'}</p>
                <div class="flex items-center gap-4 mb-4">
                    <img class="w-12 h-12 rounded-full border-2 border-red-500" src="${video.authors[0].profile_picture}" alt="${video.authors[0].profile_name}">
                    <div>
                        <p class="font-semibold text-gray-700">${video.authors[0].profile_name}
                            ${video.authors[0].verified ? '<img src="assets/verify.png" class="inline w-4 h-4 ml-1" title="Verified" />' : ''}
                        </p>
                        <p class="text-sm text-gray-500">${video.authors[0].profession || ''}</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <span class="block text-xs text-gray-400">Views</span>
                        <span class="font-medium text-gray-800">${video.others.views}</span>
                    </div>
                    <div>
                        <span class="block text-xs text-gray-400">Posted</span>
                        <span class="font-medium text-gray-800">
                            ${video.others.posted_date ? `${Math.floor(parseInt(video.others.posted_date) / 3600)}hrs ${Math.floor((parseInt(video.others.posted_date) / 60) % 60)}min ago` : 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-action mt-6">
            <form method="dialog">
                <button class="btn bg-red-500 hover:bg-red-600 text-white border-none px-6 py-2 rounded-md shadow">Close</button>
            </form>
        </div>
    `;
    detailsContainer.scrollTop = 0;
    document.getElementById('video_details').showModal();
}


// Search Functionality
document.getElementById("search-field").addEventListener("keyup", (e) => {
    const query = e.target.value;
    console.log(query);

    searchVideos(query);
});


const searchVideos = (query) => {
    showLoader();
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${query}`)
        .then(res => res.json())
        .then(data => makeVideoCard(data.videos))
        .catch(error => console.log('Error fetching videos:', error));
}


// Show loading spinner
const showLoader = () => {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('video-container').classList.add('hidden');
}

const hideLoader = () => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('video-container').classList.remove('hidden');
}