i = 0
j = 0
const subAnswer1 = document.getElementById('enterAnswer1')
subAnswer1.addEventListener('click', colorChange1)

function colorChange1 (){
    const answer = document.getElementById('answer1')
    console.log ('This Works')
    
    if (document.querySelector("#answer1").value == ("8")){
        const card = document.getElementById('1')
        card.className +=' correct'
        document.getElementById("answer1").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10){
            total()
        }
    }
    else{
        const card = document.getElementById('1')
        card.className += ' wrong'}
        document.getElementById("answer1").disabled = true
    j = j + 1
    if (j == 10) {
        total()
    }
    }

const subAnswer2 = document.getElementById('enterAnswer2')
subAnswer2.addEventListener('click', colorChange2)

function colorChange2() {
    const answer = document.getElementById('answer2')
    console.log('This Works')

    if (document.querySelector("#answer2").value == ("4")) {
        const card = document.getElementById('2')
        card.className += ' correct'
        document.getElementById("answer2").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('2')
        card.className += ' wrong'
        document.getElementById("answer2").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}

const subAnswer3 = document.getElementById('enterAnswer3')
subAnswer3.addEventListener('click', colorChange3)

function submitAnswer() {
    colorChange3();
}
function colorChange3() {
    const answer = document.getElementById('answer3')
    console.log('This Works')

    if (document.querySelector("#answer3").value == ("whale")) {
        const card = document.getElementById('3')
        card.className += ' correct'
        document.getElementById("answer3").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('3')
        card.className += ' wrong'
        document.getElementById("answer3").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}
const subAnswer4 = document.getElementById('enterAnswer4')
subAnswer4.addEventListener('click', colorChange4)

function colorChange4() {
    const answer = document.getElementById('answer4')
    console.log('This Works')

    if (document.querySelector("#answer4").value == ("pride")) {
        const card = document.getElementById('4')
        card.className += ' correct'
        document.getElementById("answer4").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('4')
        card.className += ' wrong'
        document.getElementById("answer4").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}
const subAnswer5 = document.getElementById('enterAnswer5')
subAnswer5.addEventListener('click', colorChange5)

function colorChange5() {
    const answer = document.getElementById('answer5')
    console.log('This Works')

    if (document.querySelector("#answer5").value == ("school")) {
        const card = document.getElementById('5')
        card.className += ' correct'
        document.getElementById("answer5").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('5')
        card.className += ' wrong'
        document.getElementById("answer5").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}

const subAnswer6 = document.getElementById('enterAnswer6')
subAnswer6.addEventListener('click', colorChange6)

function colorChange6() {
    const answer = document.getElementById('answer6')
    console.log('This Works')

    if (document.querySelector("#answer6").value == ("elephant")) {
        const card = document.getElementById('6')
        card.className += ' correct'
        document.getElementById("answer6").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('6')
        card.className += ' wrong'
        document.getElementById("answer6").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}
const subAnswer7 = document.getElementById('enterAnswer7')
subAnswer7.addEventListener('click', colorChange7)

function colorChange7() {
    const answer = document.getElementById('answer7')
    console.log('This Works')

    if (document.querySelector("#answer7").value == ("girrafe")) {
        const card = document.getElementById('7')
        card.className += ' correct'
        document.getElementById("answer7").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('7')
        card.className += ' wrong'
        document.getElementById("answer7").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}

const subAnswer8 = document.getElementById('enterAnswer8')
subAnswer8.addEventListener('click', colorChange8)

function colorChange8() {
    const answer = document.getElementById('answer8')
    console.log('This Works')

    if (document.querySelector("#answer8").value == ("titan beetle")) {
        const card = document.getElementById('8')
        card.className += ' correct'
        document.getElementById("answer8").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('8')
        card.className += ' wrong'
        document.getElementById("answer8").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}

const subAnswer9 = document.getElementById('enterAnswer9')
subAnswer9.addEventListener('click', colorChange9)

function colorChange9() {
    const answer = document.getElementById('answer9')
    console.log('This Works')

    if (document.querySelector("#answer9").value == ("sloth")) {
        const card = document.getElementById('9')
        card.className += ' correct'
        document.getElementById("answer9").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('9')
        card.className += ' wrong'
        document.getElementById("answer9").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}
const subAnswer10 = document.getElementById('enterAnswer10')
subAnswer10.addEventListener('click', colorChange10)

function colorChange10() {
    const answer = document.getElementById('answer10')
    console.log('This Works')

    if (document.querySelector("#answer10").value == ("falcon")) {
        const card = document.getElementById('10')
        card.className += ' correct'
        document.getElementById("answer10").disabled = true
        i = i + 1
        j = j + 1
        if (j == 10) {
            total()
        }
    }
    else {
        const card = document.getElementById('10')
        card.className += ' wrong'
        document.getElementById("answer10").disabled = true
        j = j + 1
        if (j == 10) {
            total()
        }
    }
}


function total(){
    if (i <=2){answer = "FUBAR"}
    else if (i <= 5) { answer = "study more" }
    else if (i <= 7) { answer = "Average" }
    else if (i <= 10) { answer = "Amazing" }
    alert("You got " + i + "/10.");

}
