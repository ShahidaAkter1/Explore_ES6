/**
 2) How will you get the output [Advanced - uses 2D matrix
concept]
a) level-2
b) 72.8621

[
Note: resources for 2D array:
====================
1) anisul islam 2D array
2) https://www.freecodecamp.org/news/javascript-2d-arrays/
checkpoints:
===========
1) Just know what is 2D array
2) how to access an element in 2D array
Then you will be able to do this task.
]
 */
let data =[
{ "pHeroCourses": {
                    "course-x": "web development"
                 }},

{ "pHeroCourses": {
                "course-y": "phitron"
                }},

{"pHeroCourses": {
                "course-z": "acc"
                }},

{"pHeroCourses": {"course-xyz": "level-2"},
 "locationField": {"en-US": {
                            "lat": 19.28563,
                            "lon": 72.8691
                            }
                  }
}
]

const output1=data[3].pHeroCourses;
console.log(output1);
const output2=data[3].locationField;
console.log(output2);