/* Passing Grade Average
Create a program that takes an array of grades as input and calculates the average only 
for passing grades (greater than or equal to 70)
*/

const grades = [20,50,70,80,90,60,100]

// Filtering passing grades (grades greater than or equal to 70)
const passingGrades = grades.filter(grade => grade >= 70)

// Calculating the average of passing grades
const averagePassingGrade = passingGrades.reduce((sum,grade) => sum + grade,0) / passingGrades.length

console.log('original grades: ',grades) // Displaying original grades
console.log('passing grades: ', passingGrades) // Displaying passing grades
console.log('average passing grade: ', averagePassingGrade) // Displaying average passing grade