class Garden {
    #garden;
    #watchedDayText
    #treesCountText
    #applesCountText

    #observationDaysCount = 0;
    #treesList = [];

    constructor () {
        this.#garden = document.getElementById('garden');
        this.#watchedDayText = document.getElementById('watched-day-text');
        this.#treesCountText = document.getElementById('trees-count-text');
        this.#applesCountText = document.getElementById('apples-count-text');

        this.#createGarden();
        this.render();
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

    render () {
        this.#garden.innerHTML = '';

        this.#treesList.forEach((tree, index) => {
            this.#garden.append(tree.render(index));
        });
        
        this.#watchedDayText.innerHTML = `День ${this.#observationDaysCount}`;
        this.#treesCountText.innerHTML = `Деревья: ${this.getTreesCount()}`;
        this.#applesCountText.innerHTML = `Яблоки: ${this.getApplesCount()}`;
    };

    passDay () {
        this.#treesList.forEach((tree) => {
            tree.passDay();
        });

        this.#observationDaysCount++;
        this.render();
    };
};
