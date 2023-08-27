"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
function main() {
    let student1 = new Student_1.default("John Doe", "Math", 1000);
    student1.addStudent();
    const student2 = new Student_1.default("Jane Smith", "History", 1500);
    student2.addStudent();
    console.log(student1);
    console.log(student2);
}
main();
