class Tree {
    #treeAge;
    #applesList = [];

    constructor () {
        this.#createTree();
    };

    #createAplee (treeAge) {
        this.#applesList.push(new Apple(treeAge));
    };

    #createAplees (treeAge) {
        const applesCount = Math.floor(Math.random() * 100);

        for (let i = 0; i < applesCount; i++) {
            this.#createAplee(treeAge);
        }
    };

    #createTree () {
        this.#treeAge = RandomNumber.create(30);
        this.#createAplees(this.#treeAge);
    };

    getApplesCount () {
        return this.#applesList.length
    };

    getInfo () {
        return this.#applesList.map((apple) => {
            return apple.getInfo()
        })
    };

    render (index) {
        const treeTittle = document.createElement('h2');
        treeTittle.innerText = `Дерево: ${index}`;

        const treeAge = document.createElement('p');
        treeAge.innerText = `Возраст: ${this.#treeAge}`;

        const applesCount = document.createElement('p');
        applesCount.innerText = `Яблоки: ${this.getApplesCount()} шт.`;

        const infoBtn = document.createElement('button');
        infoBtn.innerText = 'Консоль';
        infoBtn.onclick = () => console.log(this.getInfo());

        const tree = document.createElement('div');
        tree.classList.add('garden__tree')
        tree.append(treeTittle);
        tree.append(treeAge);
        tree.append(applesCount);
        tree.append(infoBtn);

        return tree
    };

    passDay () {
        this.#applesList = this.#applesList.filter((apple) => {
            apple.passDay();
            return apple.getInfo().appleAge < 36
        });

        this.#treeAge++;
        if (this.#treeAge % 30 === 0) this.#createAplees();
    };
};
