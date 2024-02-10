const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomtopic = topics[Math.floor(Math.random() * topics.length)];

function listtopics() {
  for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selecttopic() {
  if (randomtopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomtopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomtopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomtopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}
console.log("Here are the topics we leared through Prework:");
listtopics()
console.log("Which topic should we study first?");
selecttopic()