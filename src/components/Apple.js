class Apple {
    #initTreeAge;
    #appleAge;
    #appleColor;
    #appleSize;
    #isSpoiled = 0;
    #isFallen = 0;

    constructor (initTreeAge) {
        this.#initTreeAge = initTreeAge;
        this.#createApple();
    };

    #setAppleAge () {
        if (this.#initTreeAge === undefined) this.#appleAge = 0;
        else this.#appleAge = RandomNumber.create(Math.min(30, this.#initTreeAge));
    };

    get appleAge () {
        return this.#appleAge
    };

    #setAppleColor () {
        this.#appleColor = this.#appleAge < 25 ? 'зелёное' : 'красное';
    };

    get appleColor () {
        return this.#appleColor
    };

    #setAppleSize () {
        switch (true) {
            case this.#appleAge < 15: this.#appleSize = 'маленькое'; break;
            case this.#appleAge < 25: this.#appleSize = 'среднее'; break;
            default: this.#appleSize = 'большое';
        }
    };

    get appleSize () {
        return this.#appleSize
    };

    #dropApple () {
        if (this.#appleAge > 29) this.#isFallen = 1;
    };

    get isFallen () {
        return this.#isFallen ? 'упало' : 'на дереве'
    };

    #spoilApple () {
        if (this.#isFallen) this.#isSpoiled = 1;
    };

    get isSpoiled () {
        return this.#isSpoiled ? 'испорчено' : 'свежее'
    };

    #createApple () {
        this.#setAppleAge();
        this.#setAppleColor();
        this.#setAppleSize();
    };

    getInfo () {
        return {
            appleAge: this.appleAge,
            appleColor: this.appleColor,
            appleSize: this.appleSize,
            isFallen: this.isFallen,
            isSpoiled: this.isSpoiled,
        }
    };

    passDay () {
        this.#appleAge++;
        this.#setAppleColor();
        this.#setAppleSize();
        this.#spoilApple();
        this.#dropApple();
    };
};
