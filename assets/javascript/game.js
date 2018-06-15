
// Random number generator for what the user needs to get

$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#number').text(Random);

    // Array for numbers, variables, and set up for html	

    var GeneratedNumbers = []
    var wins = 0;
    var losses = 0;
    var total = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // Random numbers for each of the jewels

    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 11 + 1);
            GeneratedNumbers.push(num);
        }
    }

    // Initialize

    fourRandomNumbers();

    // Game reset

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#combined').text(total);
    }

    // Add wins to the total

    function addWin() {
        alert("You Win!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    // Add losses to the total

    function addLoss() {
        alert("You Lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    // Click events for the jewels

    $('.JewelStyle').on('click', function() {
        var elem = $(this);
        var indx = elem.data('idx');

        total = total + GeneratedNumbers[indx];
        $('#combined').text(total);

        if (total == Random) {
            addWin();
        }
        else if (total > Random) {
            addLoss();
        }
    })

    // $('#one').on('click', function () {
    //     total = total + GeneratedNumbers[0];
    //     $('#combined').text(total);

    //     // Call addWin and addLoss functions

    //     if (total == Random) {
    //         addWin();
    //     }
    //     else if (total > Random) {
    //         addLoss();
    //     }
    // })

    // // Click events for the second jewel

    // $('#two').on('click', function () {
    //     total = total + GeneratedNumbers[1];
    //     $('#Combined').text(total);

    //     // Call addWin and addLoss functions

    //     if (total == Random) {
    //         addWin();
    //     }
    //     else if (total > Random) {
    //         addLoss();
    //     }
    // })

    // // Click events for the third jewel

    // $('#three').on('click', function () {
    //     total = total + GeneratedNumbers[2];
    //     $('#combined').text(total);

    //     // Call addWin and addLoss functions

    //     if (total == Random) {
    //         addWin();
    //     }
    //     else if (total > Random) {
    //         addLoss();
    //     }
    // })

    // // Click events for the fourth jewel

    // $('#four').on('click', function () {
    //     total = total + GeneratedNumbers[3];
    //     $('#combined').text(total);

    //     // Call addWin and addLoss functions

    //     if (total == Random) {
    //         addWin();
    //     }
    //     else if (total > Random) {
    //         addLoss();
    //     }
    // });

});	