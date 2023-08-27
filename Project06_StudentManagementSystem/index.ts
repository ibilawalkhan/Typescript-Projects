import Student from "./Student";


   function main() {
        let student1 = new Student("John Doe", "Math", 1000)
        student1.addStudent()

        const student2 = new Student("Jane Smith", "History", 1500)
        student2.addStudent()

        console.log(student1);
        console.log(student2);
    }

main()