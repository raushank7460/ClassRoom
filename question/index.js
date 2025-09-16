const Student =[
    {
        name:"A",
        score:{
            mats:90,
            eng:80,
            science:70
        }
    },
    {
        name:"B",
         score:{
            mats:60,
            eng:75,
            science:85
        }

    },
    {
        name:"C",
        score:{
            mats:100,
            eng:95,
            science:70
        }
    }
]

let totalmath=0;
let totaleng=0;
let totalscience=0;
for(let i=0;i<Student.length;i++){
    totalmath=totalmath+Student[i].score.mats;
    totaleng=totaleng+Student[i].score.eng;
    totalscience=totalscience+Student[i].score.science;
}

let avgMath=totalmath/Student.length;
let avgeng=totaleng/Student.length;
let avgscience=totalscience/Student.length;

console.log(avgMath);
console.log(avgeng);
console.log(avgscience);
