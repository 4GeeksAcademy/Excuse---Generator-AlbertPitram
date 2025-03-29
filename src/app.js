function generateExcuse() {
  let who = ['The dog', 'Joe Biden', 'Ted Kazinsky', 'Pedro Sanchez'];
  let action = ['ate', 'destroyed', 'robbed', 'set in fire'];
  let what = ['my homework', 'my Jack Daniels bottle', 'the ta paper'];
  let when = ['before the class', 'when I was playing Balatro', 'while I was driving like Ryan Gosling', 'during my exercise rutine', 'while I was eating a durum kebab'];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];


  let excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen + '.';

 
  document.getElementById('excuse').innerHTML = excuse;
}