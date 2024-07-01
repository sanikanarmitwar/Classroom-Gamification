const data = [
    {
        id: 1,
        className: "Class A",
        availablePoints: 300,
        totalPoints: 300,
        tasks: [
            {id:1,taskdesc: 'Quiz 1',points: 100},
            {id:1,taskdesc: 'Quiz 2',points: 100},
            {id:1,taskdesc: 'Assignment 1',points: 100}
        ],
        students: [
            { id: 1, Rollno: 'B22CS001', points: 250, isCurrentUser: false },
            { id: 2, Rollno: 'B22CS002', points: 300, isCurrentUser: true },
            { id: 3, Rollno: 'B22CS003', points: 220, isCurrentUser: false }
        ]
    },
    {
        id: 2,
        className: "Class B",
        availablePoints: 300,
        totalPoints: 350,
        tasks: [
            {id:1,taskdesc: 'Assignment 1',points: 100},
            {id:1,taskdesc: 'Quiz 1',points: 150},
            {id:1,taskdesc: 'Assignment 2',points: 100}
        ],
        students: [
            { id: 1,  Rollno: 'B22CS001', points: 450, isCurrentUser: false },
            { id: 2,  Rollno: 'B22CS002', points: 350, isCurrentUser: true },
            { id: 3,  Rollno: 'B22CS003', points: 420, isCurrentUser: false }
        ]
    },
    {
        id: 3,
        className: "Class C",
        availablePoints: 250,
        totalPoints: 400,
        tasks: [
            {id:1,taskdesc: 'Quiz 1',points: 150},
            {id:1,taskdesc: 'Lab 1',points: 150},
            {id:1,taskdesc: 'Assignment 1',points: 100}
        ],
        students: [
            { id: 1,  Rollno: 'B22CS001', points: 350, isCurrentUser: false },
            { id: 2,  Rollno: 'B22CS002', points: 400, isCurrentUser: true },
            { id: 3,  Rollno: 'B22CS003', points: 420, isCurrentUser: false }
        ]
    }
];

export default data;