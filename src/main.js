const garden = new Garden();

const treesCountButton = document.getElementById('trees-count-btn');
const applesCountButton = document.getElementById('apples-count-btn');
const infoButton = document.getElementById('info-btn');
const plusOneDayButton = document.getElementById('plus-one-day-btn');

treesCountButton.onclick = () => console.log(garden.getTreesCount());
applesCountButton.onclick = () => console.log(garden.getApplesCount());
infoButton.onclick = () => console.log(garden.getInfo());
plusOneDayButton.onclick = () => garden.passDay();
