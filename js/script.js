var listItems = document.getElementsByTagName('li'); // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; // No. of <li> elements
var newHeading = headingText + ' (' + totalItems + ' items)'; // Content

// Loop through each list item
for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    // Check if the item matches one of the specified items
    if (item.textContent === 'fresh figs' || item.textContent === 'kale' || item.textContent === 'honey') {
        // Change the class name to 'highlight'
        item.className = 'highlight';
    }
}

// Update the heading element with the new text
heading.textContent = newHeading;
