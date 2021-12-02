function main() {

    const p1 = {
        score: 0,
        button: document.querySelector('#playerOnePlus'),
        display: document.querySelector('#playerOne'),
        winnerPlayer: document.querySelector('.winner'),
        pName: document.querySelector('#pOneName')
    }

    const p2 = {
        score: 0,
        button: document.querySelector('#playerTwoPlus'),
        display: document.querySelector('#playerTwo'),
        winnerPlayer: document.querySelector('.winner'),
        pName: document.querySelector('#pTwoName')
    }

    const resetButton = document.querySelector('#reset')
    const h1 = document.querySelector('#score')
    const select = document.querySelector('#gameDur')
    let winningScore = 0;
    let isGameOver = false;

    function scoreAdder(player, oponent) {

        if (!isGameOver) {
            player.score += 1;

            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add('has-text-success')
                oponent.display.classList.add('has-text-danger')
                player.button.disabled = true;
                oponent.button.disabled = true;
                player.winnerPlayer.classList.remove('winner')
                player.winnerPlayer.innerText = `Winner is ${player.pName.value}`


            }

        }
        return player.score
    }


    p1.button.addEventListener('click', function (e) {
        p1.display.innerText = scoreAdder(p1, p2)


    })

    p2.button.addEventListener('click', function (e) {
        p2.display.innerText = scoreAdder(p2, p1)

    })



    function reset() {
        p1.score = 0
        p2.score = 0
        p1.display.innerText = '0'
        p2.display.innerText = '0'
        isGameOver = false;
        p1.display.classList.remove('has-text-success', 'has-text-danger')
        p2.display.classList.remove('has-text-success', 'has-text-danger')
        p1.button.textContent = "+1 Player One"
        p2.button.textContent = "+1 Player Two"
        p1.button.disabled = false;
        p2.button.disabled = false;
        p1.pName.value = ''
        p2.pName.value = ''
        p1.winnerPlayer.classList.add('winner')
        p2.winnerPlayer.classList.add('winner')
    }


    resetButton.addEventListener('click', reset)


    select.addEventListener('change', function (e) {

        winningScore = parseInt(this.value)
        reset()
    })

    const pForm = document.querySelector('#playerForm')

    pForm.addEventListener('submit', function (e) {

        e.preventDefault();
        console.log(pOneName.textContent)
        p1.button.textContent = `+1 ${p1.pName.value}`
        p2.button.textContent = `+1 ${p2.pName.value}`
        console.dir(pOneName)

    })


}
main()