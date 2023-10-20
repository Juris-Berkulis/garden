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

    passDay () {
        this.#applesList.forEach((apple) => {
            apple.passDay();
        });

        this.#treeAge++;
        if (this.#treeAge % 30 === 0) this.#createAplee();
    };
};
