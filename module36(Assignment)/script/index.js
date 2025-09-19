// Hide the navbar, learn-section and faq-section initially.
document.getElementById('navigation-bar').style.display = 'none';
document.getElementById('learn-section').style.display = 'none';
document.getElementById('faq-section').style.display = 'none';


// Show the navbar, learn-section and faq-section when user login.
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {

    const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value;

    if (username.length > 0) {
        if (password === "123456") {
            document.getElementById('navigation-bar').style.display = 'block';
            document.getElementById('learn-section').style.display = 'block';
            document.getElementById('faq-section').style.display = 'block';

            document.getElementById('hero-section').style.display = 'none';

            // document.getElementById("username-field").value = '';
            // document.getElementById("password-field").value = '';
            Swal.fire({
                title: "অভিনন্দন!",
                text: "চলুন আজ কিছু নতুন শেখা যাক।",
                icon: "success"
            });
        }
        else {
            Swal.fire({
                title: "Wrong Password!",
                text: "Type '123456' as password to login.",
                icon: "error"
            });
        }
    }
    else {
        Swal.fire({
            title: "No Username!",
            text: "Enter any username to login.",
            icon: "error"
        });
    }
});


// When user clicks Logout hide the navbar, learn-section and faq-section.
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    document.getElementById('navigation-bar').style.display = 'none';
    document.getElementById('learn-section').style.display = 'none';
    document.getElementById('faq-section').style.display = 'none';

    document.getElementById('hero-section').style.display = 'flex';

    // document.getElementById("username-field").value = '';
    // document.getElementById("password-field").value = '';
});


// When user clicks FAQ button scroll to the FAQ section.
const faqBtn = document.getElementById('faq-btn');
faqBtn.addEventListener('click', () => {
    document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
});

// When user clicks Learn button scroll to the Learn section.
const learnBtn = document.getElementById('learn-btn');
learnBtn.addEventListener('click', () => {
    document.getElementById('learn-section').scrollIntoView({ behavior: 'smooth' });
});


// Fetch lesson btn information from API and display on the UI.
const loadLessonBtn = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => displayLessonBtn(data.data))
}

const displayLessonBtn = (lessons) => {

    const lessonContainer = document.getElementById('lesson-btn-container');

    for (const lesson of lessons) {
        // console.log(lesson);

        const btn = document.createElement('button');
        btn.id = `lesson-${lesson.level_no}-btn`;
        // console.log(btn.id);
        btn.onclick = () => loadLessonCard(lesson.level_no);
        btn.classList.add('btn', 'btn-outline', 'btn-primary');
        btn.innerHTML = `
            <img src="assets/fa-book-open.png" alt="">
            Lesson - ${lesson.level_no}
        `;

        lessonContainer.appendChild(btn);
    }
}

loadLessonBtn();


// Fetch lesson card information from API and display on the UI.
const loadLessonCard = (level_no) => {
    const lessonCardContainer = document.getElementById('lesson-card-container');
    lessonCardContainer.textContent = '';

    showLoadingSpinner();

    fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
        .then(res => res.json())
        .then(data => displayLessonCard(data.data, level_no))
}

const displayLessonCard = (words, level_no) => {

    const lessonBtns = document.getElementById('lesson-btn-container').children;
    for (const btn of lessonBtns) {
        btn.classList.remove('btn-active');
    }

    document.getElementById(`lesson-${level_no}-btn`).classList.add('btn-active');


    // console.log(words);
    const lessonCardContainer = document.getElementById('lesson-card-container');
    lessonCardContainer.textContent = '';

    if (words.length === 0) {
        const noLessonFound = document.createElement('div');
        noLessonFound.id = 'no-lesson-found';
        noLessonFound.classList.add('col-span-full', 'text-center');
        noLessonFound.innerHTML = `
            <div class="flex justify-center mb-4">
                <img src="assets/alert-error.png" alt="">
            </div>

            <p class="hind-siliguri-font text-sm text-[#79716B]">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h1 class="hind-siliguri-font text-4xl font-medium mt-3">
                নেক্সট Lesson এ যান।
            </h1>
        `;
        document.getElementById('lesson-card-container').appendChild(noLessonFound);

        return;
    }

    for (const word of words) {
        // console.log(word);

        const card = document.createElement('div');
        card.id = `word-${word.id}`;
        card.classList.add('bg-white', 'p-7', 'rounded-xl', 'inter-font', 'shadow-lg');
        card.innerHTML = `
            <div class="p-7 border-1 border-[#C6BDBD50] rounded-xl hover:bg-[#1A91FF10] duration-300">
                <div class="flex flex-col justify-center items-center gap-5 mb-14">
                    <h1 class="text-[2rem] font-bold">
                        ${word.word}
                    </h1>
                    <p class="text-xl font-medium">
                        Meaning /Pronounciation
                    </p>
                    <h1 class="shadhinata-font text-[2rem] font-semibold  opacity-80">
                        "${word.meaning === null ? 'অর্থ নেই' : word.meaning} / ${word.pronunciation}"
                    </h1>
                </div>

                <div class="flex justify-between items-center">
                    <div onclick="loadWordDetail(${word.id})" class="p-4 bg-[#1A91FF10] rounded-lg cursor-pointer hover:bg-[#1A91FF30] duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="slate" class="size-6">
                            <path fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>


                    <div onclick="pronounceWord('${word.word}')" class="p-4 bg-[#1A91FF10] rounded-lg cursor-pointer hover:bg-[#1A91FF30] duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="slate" class="size-6">
                            <path
                                d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                            <path
                                d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                        </svg>
                    </div>
                </div>
            </div>
        `;

        lessonCardContainer.appendChild(card);
    }
}


// Fetch Word Detail from API and display on the UI.
const loadWordDetail = (id) => {
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(res => res.json())
        .then(data => displayWordDetail(data.data))
}

const displayWordDetail = (word) => {
    console.log(word);

    const modalBody = document.getElementById('word-details');
    modalBody.textContent = '';

    const card = document.createElement('div');
    card.innerHTML = `
        <div class="flex flex-col justify-center items-start p-4 gap-6 mb-6 border-1 border-[#C6BDBD50] rounded-xl">
            <div class="flex justify-center items-center mb-2">
                <h1 class="text-[2rem] font-medium">
                    ${word.word} (
                </h1>
                        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                    <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                    <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>

                <h1 class="shadhinata-font text-[2rem] font-medium">
                    : ${word.pronunciation} <span class="poppins-font">)</span>
                </h1>
            </div>

            <div>
                <h1 class="text-xl font-bold">
                    Meaning
                </h1>
                <p class="shadhinata-font font-medium text-lg">
                    ${word.meaning === null ? 'অর্থ নেই' : word.meaning}
                </p>
            </div>   

            <div>
                <h1 class="text-xl font-bold">
                    Example
                </h1>
                <p class="font-medium text-lg">
                    ${word.example === null ? '<span class="shadhinata-font">উদাহরণ নেই</span>' : word.sentence}
                </p>
            </div>

            <div>
                <h1 class="hind-siliguri-font text-xl font-bold mb-2">
                    সমার্থক শব্দগুলো
                </h1>
                
                <div>
                    ${word.synonyms.map(synonym => `
                        <button class="btn font-bold">
                            ${synonym}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>  
        
        <div class="modal-action justify-start">
            <form method="dialog">
                <button class="btn btn-primary">Complete Learning</button>
            </form>
        </div>
    `;

    modalBody.appendChild(card);

    const modal = document.getElementById('word_details_card');
    modal.showModal();
}


// Loading spinner function when vocabulary cards are being fetched from the API.
const showLoadingSpinner = () => {

    const lessonCardContainer = document.getElementById('lesson-card-container');

    const spinnerSection = document.createElement('div');
    spinnerSection.id = 'spinner';
    spinnerSection.classList.add('col-span-full', 'text-center', 'hidden');
    spinnerSection.innerHTML = `
        <span class="loading loading-spinner text-primary"></span>
    `;

    lessonCardContainer.appendChild(spinnerSection);
    spinnerSection.classList.remove('hidden');
}


// Pronounce word function.
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN';
    window.speechSynthesis.speak(utterance);
}