// 1. （A）請寫一個程式把裡面的字串反過來。
//    （B）請寫一個程式把裡面的字串，每個單字本身做反轉，但是單字的順序不變。
// 舉例
// f("junyiacademy") == "ymedacaiynuj"
// f("flipped class room is important") == "deppilf ssalc moor si tnatropmi"

function A(text = '') {
    let array = text.split('');
    let reversedText = '';
    array.forEach(char => {
        reversedText = char + reversedText;
    });
    return reversedText;
}

function B(text = '') {
    let array = text.split(' ');
    let reversedText = '';
    array.forEach(word => {
        if(reversedText === '') { 
            reversedText += A(word);
        } else {
            reversedText += ' ' + A(word);
        }
    });
    return reversedText;
}