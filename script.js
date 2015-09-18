$(function() {

    var $digits = $(".digit");

    function getRandomLetter() {
        var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var ranNum = Math.floor((Math.random() * 26) + 0);

        //console.log(ranNum);
        return letterArray[ranNum];
    }

    function insertText() {

        /*$digits.eq(0).text( getRandomLetter() );
        $digits.eq(1).text( getRandomLetter() );
        $digits.eq(2).text( getRandomLetter() );
        $digits.eq(3).text( getRandomLetter() );*/

        $digits.each( function(index) {
            $(this).text(getRandomLetter());
        });
    }

    /*function matchOrNot(source, target) {
    }*/

    function checkMatchOrNot() {
        var i;
        var matchOrNot = false;
        $("#result").html("&nbsp;");
        for (i = 0; i < words.length; i++) {
            if (permArr.indexOf(words[i]) > -1) {
                matchOrNot = true;
                $("#result").text("You won!");
                break;
            }
        }
        console.log(matchOrNot, words[i] );
    }

    /** Ref: http://staff.roguecc.edu/JMiller/JavaScript/permute.html **/
    //permArr: Global array which holds the list of permutations
    //usedChars: Global utility array which holds a list of "currently-in-use" characters
    var permArr = [],
        usedChars = [];
    function permute(input) {
        //convert input into a char array (one element for each character)
        var i, ch, chars = input.split("");
        for (i = 0; i < chars.length; i++) {
            //get and remove character at index "i" from char array
            ch = chars.splice(i, 1);
            //add removed character to the end of used characters
            usedChars.push(ch);
            //when there are no more characters left in char array to add, add used chars to list of permutations
            if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
            //send characters (minus the removed one from above) from char array to be permuted
            permute(chars.join(""));
            //add removed character back into char array in original position
            chars.splice(i, 0, ch);
            //remove the last character used off the end of used characters array
            usedChars.pop();
        }
    }
    /** **/

    $("button").on("click", function() {

        permArr.splice(0, 24);
        var digitText = "";

        insertText();

        for (var i = 0; i < $digits.length; i++) {
            digitText += $digits.eq(i).text();
        }

        //console.log(digitText);

        permute(digitText);
        checkMatchOrNot();

        /*$digits.each( function(index) {
         $(this).text(getRandomLetter());
         });*/

        //console.log( permArr );

        /*for (var i = 0; i < $digits.length; i++) {
         digitText += $digits.eq(i).text();
         }*/

    });

});