let bruh = Math.floor(Math.random()*21);
function randomNumber(){
    console.log(bruh);
}
randomNumber();

let bruh2 = Math.floor(Math.random()*26);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function randomLetter(){
    console.log(alphabet[bruh2]);
}
randomLetter();

const foods = ["pizza", "burgers", "rice and beans", "lasagna", "macaroni and cheese", "baked potatoes"
];
let bruh3 = Math.floor(Math.random()*6);
function randomFood(){
    console.log(foods[bruh3]);
}
randomFood();

const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
let bruh4 = Math.floor(Math.random()*7);
function randomStudent(){
    console.log(students[bruh4]);
}
randomStudent();

function randomGroup(){
    for(i=0; i<3; i++){
        randomStudent();
    }
}
randomGroup();