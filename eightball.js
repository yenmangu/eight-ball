//eightball
let userName = '';
console.log(`The name you have entered is: ${userName ? userName : 'Error! No name! I will call you stranger'}.`);
console.log(`hello ${userName ? userName : 'stranger'}! Welcome to the show!`);
let userQ = 'will i be rich?';
console.log(`So, ${userName ? userName : 'stranger'}, you have asked the magic eight ball "${userQ ? userQ : 'nothing!'}" `)
let randomNo = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNo) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default: 
    console.log('uh oh, something has gone wrong.');
    break;
}
console.log(eightBall);