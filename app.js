const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img:
        'image/image-from-rawpixel-id-2330302-jpeg.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum enim ullam. Optio eos ad facilis reprehenderit alias culpa quia rem deserunt sequi non numquam sint quo eaque, repellat quidem quasi nesciunt vitae, animi saepe? "
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img:
        'image/image-from-rawpixel-id-388399-jpeg.jpg',
        text: "Provident, totam magni laudantium amet odio doloremque molestias ipsa quod perferendis sunt dicta, officiis adipisci ipsam vitae facere animi nostrum aliquid commodi rem mollitia! "
    },
    {
        id: 3,
        name: 'emily',
        job: 'devops',
        img:
        'image/image-from-rawpixel-id-400046-jpeg.jpg',
        text: "Ad ea suscipit corporis delectus vel et minus repellendus nesciunt omnis doloribus reprehenderit expedita quae blanditiis obcaecati, quas vitae odit excepturi reiciendis fuga in veniam autem! Earum nobis dolorum possimus. Sunt?"
    }
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('jobs');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;
// load initial item

window.addEventListener('DOMContentLoaded',() => {
    showPerson(currentItem);
})

// show person based on item


const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click',() => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

// show prev person

prevBtn.addEventListener('click',() => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// show random person

randomBtn.addEventListener('click',() => {

    let random = Math.floor(Math.random() * reviews.length);
    currentItem = random;
    showPerson();
})
