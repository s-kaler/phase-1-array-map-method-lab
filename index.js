const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials  = tutorials.map((tutorial) => {
    console.log(tutorial);
    let words = tutorial.split(" ");
    let newTitle = "";
    for(let word of words) {
      newTitle = newTitle + word[0].toUpperCase() + word.slice(1) + " ";
    }
    tutorial = newTitle.slice(0, -1);
    console.log(tutorial);
    return tutorial;
    //debugger;
  });
  return newTutorials;
}

titleCased();