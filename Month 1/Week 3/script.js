let char = document.querySelector('#char');
let word = document.querySelector('#word');
let sentence = document.querySelector('#sentence');
let paragraph = document.querySelector('#paragraph');
let space = document.querySelector('#space');
let letter = document.querySelector('#letter');
let digit = document.querySelector('#digit');
let special = document.querySelector('#special');

let textarea = document.querySelector('textarea');

textarea.addEventListener('input', (event) => {
  let input = event.target.value;

  const charCount = input.length;
  char.innerHTML = charCount;

  const sentenceCount = input.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
  sentence.innerHTML = sentenceCount;

  const spaceCount = (input.match(/ /g) || []).length;
  space.innerHTML = spaceCount;

  const paraCount = input.split('\n').filter(paras => paras.trim().length > 0).length;
  paragraph.innerHTML = paraCount;

  const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
  letter.innerHTML = letterCount;

  const wordCount = input.trim().split(/\s+/).filter(word => word.length > 0).length;
  word.innerHTML = wordCount;

  const digitCount = (input.match(/\d/g) || []).length;
  digit.innerHTML = digitCount;

  const specialCount = (input.match(/[^a-zA-Z\d\s]/g) || []).length;
  special.innerHTML= specialCount;
})
