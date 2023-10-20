const garden = new Garden();

const treesCountButton = document.getElementById('trees-count-btn');
const applesCountButton = document.getElementById('apples-count-btn');
const infoButton = document.getElementById('info-btn');
const plusOneDayButton = document.getElementById('plus-one-day-btn');

treesCountButton.addEventListener('click', () => console.log(garden.getTreesCount()));
applesCountButton.addEventListener('click', () => console.log(garden.getApplesCount()));
infoButton.addEventListener('click', () => console.log(garden.getInfo()));
plusOneDayButton.addEventListener('click', () => garden.passDay());
