// To transpile into JS in VS Code open a terminal window (if one isn't available already: Ctrl+`)
// enter the following command: rsc menu.js
// That should be it.  The menu.js file should be updated to match the current typescript file.
var counter: number = 0;
var x: number = 100;

function createNewMenuEntryNew(menuValue: string): HTMLLIElement {
    x++;
    let newEntry = document.createElement<"li">("li");

    let roleAttr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);

    let ariaAttr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);

    newEntry.innerText = menuValue;

    return newEntry;
}

function createNewMenuEntryThree(menuValue: string): HTMLLIElement {
    x++;
    let newEntry = document.createElement<"li">("li");

    let roleAttr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);

    let ariaAttr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);

    newEntry.innerText = menuValue;

    return newEntry;
}

function AddMenuItem(entryName: string): void {
    x--;
    let newEntry = createNewMenuEntry(entryName);
    counter++;

    const menu = document.getElementById(`theMenu`);
    menu.appendChild(newEntry);
    console.log("AddMenuItem called with " + entryName);
}

function createNewMenuEntry(menuValue: string): HTMLLIElement {
    x--;
    let newEntry = document.createElement<"li">("li");

    let roleAttr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);

    let ariaAttr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);

    newEntry.innerText = menuValue;

    return newEntry;
}