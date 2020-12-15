var addBtn, uname, q1, userid, q2, q3, q4, q5, score;


addBtn = document.getElementById("addBtn");

score = 0
const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userid = document.getElementById("fname").value;
    uname = document.getElementById("fname").value;
    q1 = document.getElementById("Q1").value;
    q2 = document.getElementById("Q2").value;
    q3 = document.getElementById("Q3").value;
    q4 = document.getElementById("Q4").value;
    q5 = document.getElementById("Q5").value;

    if (q1 === "3.5 years"){
        score++;
    }

    if (q2 === "Rs. 500"){
        score++;
    }

    if (q3 === "12.5%"){
        score++;
    }

    if (q4 === "Rs. 9000"){
        score++;
    }
    if (q5 === "13.33%"){
        score++;
    }


    database.ref('/users/useridquiz'+userid).set({
        name: uname,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        score: score
    });
});