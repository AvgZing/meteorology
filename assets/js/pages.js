/* 
Page downloader & switcher to make code cleaner.
By (c) Ad5001 2016
*/

articles = document.getElementsByTagName("article");
console.log(articles);
/*l = location.pathname.split("/");
l[l.length - 1] = undefined;
dir = l.join("/");*/
for (i = 0; i < articles.length; i++) {
    console.log("pages/" + articles[i].id + ".html");
    $.get("pages/" + articles[i].id + ".html", function(responseText) {
        setPage(responseText);
    });
}


function setPage(text) {
    page = text.substr(5).split(" -->")[0]; // Temporary working solution
    document.getElementById(page).innerHTML = text + '<div class="close" onclick="location.hash=\'\';">Close</div>';
    if (page == "quiz") {
        /*
Quiz maker
By (c) Ad5001 2016
*/

        QandA = [{
                question: "What are clouds?",
                a: "Big blobs of white fluffy stuff in the sky",
                b: "Air that has been condensed into blobs",
                c: "Visible chunks of condensed water vapor",
                valid: "3"
            },
            {
                question: "Which of the following falls under the category of precipitation?",
                a: "Sea water",
                b: "Hail",
                c: "Dew that formed on the grass",
                valid: "2"
            },
            {
                question: "What is the difference between a Blizzard and a Severe Storm?",
                a: "A severe comes and goes in less than 3 hours and drops a lot of snow, but a Blizzard lasts longer than 3 hours and also drops a lot of snow.",
                b: "A Blizard has faster winds, and a Severe storm is slower winds",
                c: "A severe storm has faster winds, and a Blizzard is slower winds",
                valid: "1"
            },
            {
                question: "What should your emergency kit have?",
                a: "An extra window in case one shatters",
                b: "Alcohol in case you get thirsty",
                c: "Wood in case you get cold",
                valid: "3"
            },
            {
                question: "What is El Nino?",
                a: "Cooler ocean waters in the Central/Eastern part of the Pacific ocean",
                b: "Warmer ocean waters in the Central/Eastern part of the Pacific ocean",
                c: "Cooler ocean waters in the Northern/Western part of the Pacific ocean",
                valid: "2"
            },
            {
                question: "What is La Nina?",
                a: "Cooler ocean waters in the Central/Eastern part of the Pacific ocean",
                b: "Warmer ocean waters in the Central/Eastern part of the Pacific ocean",
                c: "Cooler ocean waters in the Northern/Western part of the Pacific ocean",
                valid: "1"
            },
            {
                question: "What is Convection?",
                a: "The heat transfer between two touching bodies",
                b: "A heat transfer method that does not rely on contact",
                c: "The transfer of heat throughout a substance",
                valid: "3"
            },
            {
                question: "True or false: Water heats up faster than land and water cools down slower than land",
                a: "True",
                b: "False",
                c: "Partially true, partially false",
                valid: "3"
            },
            {
                question: "True or false: Water cools down slower than land, and land heats up faster than water.?",
                a: "True",
                b: "False",
                c: "Partially true, partially false",
                valid: "1"
            },
            {
                question: "If the building that you are in does not have a basement during a tornado, where should you go?",
                a: "Go to a floor in the middle of the building, and take shelter there",
                b: "A hallway anywhere in the building",
                c: "A room in the middle of the bottom floor with no windows",
                valid: "3"
            },
        ]

        quizStep = -1;
        score = 0;
        question = document.getElementById("question");
        answers = [document.getElementById("answer1"), document.getElementById("answer2"), document.getElementById("answer3")];
        nextQuestion();


    }
}

function quizValidate(num) {
    if (typeof QandA[quizStep + 1] == "undefined") {
        alert("Your score is : " + (score / quizStep * 100) + "%");
        quizStep = -1;
        nextQuestion();
        score = 0;
        location.hash = "#";
        return;
    }
    if (num == QandA[quizStep].valid) {
        score++;
        answers[num - 1].style.backgroundColor = "lime";
    } else {
        answers[num - 1].style.backgroundColor = "red";
    }
    setTimeout(function() {
        nextQuestion();
        answers[num - 1].style.backgroundColor = "lightgray";
    }, 2000);
}

function nextQuestion() {
    quizStep++;
    question.innerHTML = QandA[quizStep].question;
    answers[0].innerHTML = QandA[quizStep].a;
    answers[1].innerHTML = QandA[quizStep].b;
    answers[2].innerHTML = QandA[quizStep].c;
}
