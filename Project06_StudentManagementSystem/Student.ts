class Student {

    private id: string = ""
    private name: string = ""
    private course = ""
    private balance = 0
    private courses: string[] = []
    static student: Student[] = []

    constructor(name: string, course: string, balance: number) {
        this.setStudentId()
        this.name = name
        this.setCourse(course);
        this.setBalance(balance)
    }


    setStudentId() {
        let id1 = Math.floor(Math.random() * 2) + 1
        let id2 = Math.random().toString(36).substring(2, 6)
        this.id = id1 + id2
    }

    getStudentId() {
        return this.id
    }

    setCourse(course: string) {
        this.course = course
        this.enrollCourse(course)
    }

    getCourse() {
        return this.course
    }

    setBalance(balance: number) {
        this.balance = balance
    }

    getBalance() {
        return this.balance
    }

    addStudent() {
        Student.student.push(this)
    }

    enrollCourse(course: string) {
        this.courses.push(course)
    }

    viewBalance() {
        return this.balance
    }

    payTuitionFees(fee: number) {
        let remaining: number = 0
        if (this.balance >= fee) {
            remaining = this.balance - fee
            this.balance = remaining
        }

        console.log(`${fee} is paid. Remaining balance is: ${remaining}`)
    }

    showStatus() {
        // status will show all the details of the student including name, id, courses enrolled and balance
        console.log(`Student name: ${this.name}
                     Student id: ${this.getStudentId()}
                     Course enrolled: ${this.courses.join(', ')}
                     Balance: ${this.getBalance()}`)
    }
}

export default Student