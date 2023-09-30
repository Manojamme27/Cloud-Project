
function displayColleges() {
    const collegesList = document.getElementById("colleges-list");
    collegesList.innerHTML = "";


    // colleges.forEach((college) => {
    //     const listItem = document.createElement("li");
    //     listItem.innerHTML = `<a href="/college/${college.id}">${college.name}</a> - Location: ${college.location}, Courses: ${college.courses.join(", ")}`;
    //     collegesList.appendChild(listItem);
    // });

    const clg = document.getElementById('search')
    const btn = document.getElementById('btn')
    var clgName;
    function val() {
        clgName = clg.value;
        console.log(clgName)
        colleges.forEach((college) => {
            clgName = clgName.toUpperCase();
            console.log(college.name)
            if (clgName === college.name) {
                const listItem = document.getElementById('collegeList');
                listItem.innerHTML = `<a href="/college/${college.id}">${college.name}</a> - Location: ${college.location}, Courses: ${college.courses.join(", ")} contact : ${college.contact}`
                collegesList.appendChild(listItem);
                console.log("HI")
            }

        });
    }
    btn.addEventListener('click', val);
    





}


window.onload = displayColleges;

const colleges = [
    {
        id:1,
        name: "IIT KHARAGPUR",
        location: "KHARAGPUR",
        courses: ["IT", "Management"],
        contact : "03222255303",
    },
    {
        id: 2,
        name: "IIT BOMBAY",
        location: "BOMBAY",
        courses: ["IT", "Management"],
        contact: "+912225722545",
    },
    {
        id: 3,
        name: "IIT DELHI",
        location: "DELHI",
        courses: ["IT","Management"],
        contact:"01126597135",
    },
    {
        id: 4,
        name: "IIT MADRAS",
        location: "MADRAS",
        courses: ["IT", "Management"],
        contact:"+914422578100",
    },
    {
        id: 5,
        name: "IIT HYDERABAD",
        location: "HYDERABAD",
        courses: ["IT", "Management"],
        contact:"04023016033",
    },
    {
        id: 6,
        name: "NIT SURATHKAL",
        location: "SURATHKAL",
        courses: ["IT", "Management"],
        contact:"08242474000",
    },
    {
        id: 7,
        name: "NIT WARANGAL",
        location: "WARANGAL",
        courses: ["IT", "Management"],
        contact:"08702459191",
    },
    {
        id: 8,
        name: "NIT TRICHY",
        location: "TRICHY",
        courses: ["IT", "Management"],
        contact:"+914312500133",
    },
    {
        id: 9,
        name: "NIT ROURKELA",
        location: "ROURKELA",
        courses: ["IT", "Management"],
        contact:"06612462020",
    },
    {
        id: 10,
        name: "NIT RAIPUR",
        location: "RAIPUR",
        courses: ["IT", "Management"],
        contact:"07712254200",
    },
    {
        id: 11,
        name: "IIIT HYDERABAD",
        location: "HYDERABAD",
        courses: ["IT", "Management"],
        contact :"04066531000",
    },
    {
        id: 12,
        name: "IIIT BANGALORE",
        location: "BANGALORE",
        courses: ["IT", "Management"],
        contact:"08041407777",
    },
    {
        id: 13,
        name: "IIIT JABALPUR",
        location: "JABALPUR",
        courses: ["IT", "Management"],
        contact:"07612794094",
    },
    {
        id: 14,
        name: "IIIT GWALIOR",
        location: "GWALIOR",
        courses: ["IT", "Management"],
        contact:"07512449801",
    },
    {
        id: 15,
        name: "IIIT ALLAHABAD",
        location: "ALLAHABAD",
        courses: ["IT", "Management"],
        contact:"05322922000",
    },
    {
        id: 16,
        name: "CENTRAL UNIVERSITY CHHATISGARH",
        location: "CHHATISGARH",
        courses: ["IT", "Management"],
        contact:"07752260353",
    },
    {
        id: 17,
        name: "ASSAM UNIVERSITY",
        location: "ASSAM",
        courses: ["IT", "Management"],
        contact:"03842270806",
    },
    {
        id: 18,
        name: "UNIVERSITY OF HYDERABAD",
        location: "HYDERABAD",
        courses: ["IT", "Management"],
        contact:"04023130000",
    },
    {
        id: 19,
        name: "CENTRAL UNIVERSITY RAJASTHAN",
        location: "RAJASTHAN",
        courses: ["IT", "Management"],
        contact:"01463257508",
    },
    {
        id: 20,
        name: "BIRLA INSTITUTE OF TECHNOLOGY",
        location: "MESRA",
        courses: ["IT", "Management"],
        contact:"06512275444"
    },
];
document.body.style.backgroundColor = "black";
document.body.style.color="white";

