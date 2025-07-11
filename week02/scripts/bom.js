// 1. Grab references to the key DOM elements
const input   = document.querySelector('#favchap');
const button  = document.querySelector('button[type="submit"]');
const list    = document.querySelector('#chapters');
const form    = document.querySelector('#chapter-form');

// 2. (Check your understanding) Create a new <li> and a delete button
const li            = document.createElement('li');
const deleteButton  = document.createElement('button');

// 3. Example of populating the elements (not yet hooked to an event)
li.textContent     = input.value;              // uses the typed-in chapter
deleteButton.textContent = '❌';               // delete icon
// For accessibility: announce exactly what will be removed
deleteButton.setAttribute(
  'aria-label',
  `Remove ${input.value}`
);

// 4. Appending the delete button into the <li>
li.append(deleteButton);

// 5. Appending the <li> into the <ul>
list.append(li);

// —————————————————————————————————————————————————————————————————————
// Next steps (for upcoming activities):
//  • Prevent the form’s default submit
//  • On button (or form) submit, read input.value
//  • Create & append a fresh li + delete button each time
//  • Attach an event listener to ❌ to remove its parent <li>
//  • Clear the input field and refocus()
// —————————————————————————————————————————————————————————————————————
