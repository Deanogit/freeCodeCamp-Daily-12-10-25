// Battle of Words
// Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

// The given sentences will always contain the same number of words.
// Words are separated by a single space and will only contain letters.
// The value of each word is the sum of its letters.
// Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
// A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
// Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
// A word wins if its value is greater than the opposing word's value.
// The team with more winning words is the winner.
// Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

function battle(ourTeam, opponent) {
  console.log(ourTeam, opponent);

  // define ref string
  const refString = 'abcdefghijklmnopqrstuvwxyz';

  console.log(refString.length);

  // define helper function to count words
  function getWord(word) {
    let counter = 0;
    const wordArr = word.split('');
    wordArr.forEach((letter) => {
      // If the letter is uppercase, calculate its 1-26 value and then multiply by 2.
      if (letter === letter.toUpperCase()) {
        counter += (refString.indexOf(letter.toLowerCase()) + 1) * 2;
      } else {
        counter += refString.indexOf(letter) + 1;
      }
    });
    return counter;
  }
  // split sentences to arrays
  const teamArr = ourTeam.split(' ');
  const oppArr = opponent.split(' ');

  const teamScores = teamArr.map((x) => getWord(x));
  console.log(teamScores);
  const oppScores = oppArr.map((x) => getWord(x));
  console.log(oppScores);
  // return ourTeam;

  // comparison loop
  let teamIsWinning = 0;
  let oppIsWinning = 0;

  teamScores.forEach((score, i) => {
    if (score > oppScores[i]) {
      teamIsWinning += 1;
    } else if (score < oppScores[i]) {
      oppIsWinning += 1;
    }
  });

  if (teamIsWinning > oppIsWinning) {
    return 'We win';
  } else if (teamIsWinning < oppIsWinning) {
    return 'We lose';
  } else {
    return 'Draw';
  }

  // console.log(teamIsWinning, oppIsWinning)
}
