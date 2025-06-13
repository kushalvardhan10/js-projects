const reviews = [
    {
        id: 1,
        name: 'kushal',
        job: 'family',
        img: 'IMG-20230627-WA0014.jpg',
        Text: 'hello, I am here to give you a review of your course, very good content!'
    },
    {
        id: 2,
        name: 'vardhan',
        job: 'movies',
        img: 'netflixlogo.png',
        Text: 'hello, I am here to give you a review of your course, very good content!'
    },
    {
        id: 3,
        name: 'naidu',
        job: 'nothing',
        img: 'IMG-20230627-WA0014.jpg',
        Text: 'hello, I am here to give you a review of your course, very good content!'
    },
    {
        id: 4,
        name: 'asmi',
        job: 'nothing',
        img: 'IMG-20230627-WA0014.jpg',
        Text: 'hello, I am here to give you a review of your course, very good content!'
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');
const job = document.getElementById('job');
const prebtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');

let currentitem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showperson(currentitem);
});

// Function to show the current person
function showperson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.Text;
}

// Event listener for the "Prev" button
prebtn.addEventListener('click', function() {
    currentitem--;
    // Loop back to the last review if at the beginning
    if (currentitem < 0) {
        currentitem = reviews.length - 1;
    }
    showperson(currentitem);
});

// Event listener for the "Next" button
nextbtn.addEventListener('click', function() {
    currentitem++;
    // Loop back to the first review if at the end
    if (currentitem >= reviews.length) {
        currentitem = 0;
    }
    showperson(currentitem);
});