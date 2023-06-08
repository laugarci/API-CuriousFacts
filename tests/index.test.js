const { createDiv, createParagraph, createCrossMark } = require('../js/favorites');


test('createDiv should create a div element with class "fun-fact-box"', () => {
  const div = createDiv();
  expect(div.tagName).toBe('DIV');
  expect(div.classList.contains('fun-fact-box')).toBe(true);
});

test('createParagraph should create a <p> element with the given text content', () => {
  const text = 'Hello, world!';
  const paragraph = createParagraph(text);
  expect(paragraph.tagName).toBe('P');
  expect(paragraph.textContent).toBe(text);
});

test('createCrossMark should create a element with the class "cross-mark" and a click event listener', () => {
  const text = 'Example Text';
  const parentDiv = document.createElement('div'); 
  const div = document.createElement('div');
  parentDiv.appendChild(div); 
  const crossMark = createCrossMark(text, div);

  expect(crossMark.tagName).toBe('SPAN');
  expect(crossMark.classList.contains('cross-mark')).toBe(true);
  expect(crossMark.textContent).toBe('x');

  const clickEvent = new Event('click');
  crossMark.dispatchEvent(clickEvent);
});
