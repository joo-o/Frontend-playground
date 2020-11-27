// while 문 //

var word = '이영주';

while (true) {
    var answer = prompt(word);
    /// 맞았을때 
    if (word[word.length - 1] === answer[0]) {
        word = answer;
        /// 틀렸을때 
    } else  {
        alert ('땡!')
    } 
}


// for 문 //

for (var word = '이영주'; true; ) {
    var answer = prompt(word);
    /// 맞았을때 //
    if (word[word.length - 1] === answer[0]) {
        word = answer;
        /// 틀렸을때 //
    } else  {
        alert ('땡!')
    } 
}



// for 문 + game over //

var wrongWord = 0;

for (var word = '이영주'; wrongWord < 3; ) {
    var answer = prompt(word);
    /// 맞았을때 //
    if (word[word.length - 1] === answer[0]) {
        word = answer;
        
        /// 틀렸을때 //
    } else {
        wrongWord++
        alert ('땡!')
    }
}
