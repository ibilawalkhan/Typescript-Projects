import Person from "./Person";

class Student extends Person {
    private name: string = ""

    constructor() {
        super()
        name: ""
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }
}

export default Student