class Garden {
    #observationDaysCount = 0;
    #treesList = [];

    constructor () {
        this.#createGarden();
    };

    #createTree () {
        this.#treesList.push(new Tree());
    };

    #createTrees () {
        const treesCount = RandomNumber.create(100);

        for (let i = 0; i < treesCount; i++) {
            this.#createTree();
        }
    };

    #createGarden () {
        this.#createTrees();
    };

    getTreesCount () {
        return this.#treesList.length
    };

    getApplesCount () {
        return this.#treesList.reduce((totalCount, tree) => {
            return totalCount + tree.getApplesCount()
        }, 0)
    };

    getInfo () {
        return this.#treesList.map((tree) => {
            return tree.getInfo();
        })
    };

    passDay () {
        this.#treesList.forEach((tree) => {
            tree.passDay();
        });

        this.#observationDaysCount++;
    };
};
