// To transpile into JS in VS Code open a terminal window (if one isn't available already: Ctrl+`)
// enter the following command: tsc menu.ts
// That should be it.  The menu.js file should be updated to match the current typescript file.
var counter = 0;
var x = 100;
function createNewMenuEntryNew(menuValue) {
    x++;
    var newEntry = document.createElement("li");
    var roleAttr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);
    var ariaAttr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);
    newEntry.innerText = menuValue;
    return newEntry;
}
function createNewMenuEntryThree(menuValue) {
    x++;
    var newEntry = document.createElement("li");
    var roleAttr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);
    var ariaAttr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);
    newEntry.innerText = menuValue;
    return newEntry;
}
function AddMenuItem(entryName) {
    x--;
    var newEntry = createNewMenuEntry(entryName);
    counter++;
    var menu = document.getElementById("theMenu");
    menu.appendChild(newEntry);
    console.log("AddMenuItem called with " + entryName);
}
function createNewMenuEntry(menuValue) {
    x--;
    var newEntry = document.createElement("li");
    var roleAttr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);
    var ariaAttr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);
    newEntry.innerText = menuValue;
    return newEntry;
}
