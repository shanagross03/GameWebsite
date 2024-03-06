$(() => {
    const wordsToChooseFrom = ['BEVERAGE', 'SYMPHONY', 'ATTITUDE', 'CONTROL', 'KETCHUP', 'SPRINKLE', 'FLOWER', 'MAGIC', 'COMPUTER', 'CEREAL', 'BRACELET', 'SLINKY', 'ELEPHANT'];
    const hangManWord = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)].split('')

    formSetUp();
    console.log(hangManWord)

    $("body").on("click", ".button-letter", function () {

        let guessedLetter = $(this).text();
        $(this).hide();

        if (hangManWord.every(b => b != guessedLetter)) {

            $("#game-out").append(`<button disabled class="rounded-circle" style="width:50px; height:50px; margin:5px; background-color: black; color:lightgreen; font-size:30px">${$("#game-out").children().length + 1}</button>`)
        }

        for (let i = 0; i < hangManWord.length; i++) {

            if (hangManWord[i] === guessedLetter) {
                $('#letters').children()[i].append(`${guessedLetter}`)
            }
        }

        if ($("#game-out").children().length === 10 || ($('#letters').children().text() === hangManWord.join(''))) {
            $(".button-letter").prop('disabled', true)
            $("#game-out").children().length === 10 ? $("#message").text(`You're out! The word was ${hangManWord.join('')}.`) : $("#message").text("You won!");
        }
    })

    function formSetUp() {
        for (let i = 0; i < hangManWord.length; i++) {

            $("#letters").append(`<button class="border-0" style="border-bottom: 7px solid black !important; background-color:transparent; color:lightgreen; margin-right:20px; font-size:55px; height: 71px; width:70px"></button>`)
        }
    }
})