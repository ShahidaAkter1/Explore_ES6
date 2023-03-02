const student = {
    name: 'Shahida Akter',
    age:15,
    class:'Ten',
    marks:{
        math:78,
        phy:89,
        chemistry:65,
    }
}

//1st way property dhorer....(dot(.) notation)
const math = student.marks.math;
console.log(math);

//2nd way
const chemistry  = student['marks']['chemistry'];
console.log(chemistry);

//[] notation
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);