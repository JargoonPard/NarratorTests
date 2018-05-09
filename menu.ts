// to transpile into JS in VS Code open a terminal window (if one isn't available already: Ctrl+`)
// enter the following command: tsc menu.ts
// that should be it.  The menu.js file should be updated to match the current typescript file.
var counter: number = 0;
var x: number = 100;

function createNewMenuEntryNew(menuValue: string): HTMLLIElement {
    x++;
    let newEntry:HTMLLIElement = document.createElement<"li">("li");

    let roleAttr:Attr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);

    let ariaAttr:Attr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);

    newEntry.innerText = menuValue;
    console.error("createNewMenuEntryNew line 20");

    return newEntry;
}

function createNewMenuEntryThree(menuValue: string): HTMLLIElement {
    x++;
    console.warn(`x is ${x}`);
    let newEntry:HTMLLIElement = document.createElement<"li">("li");

    let roleAttr:Attr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);

    let ariaAttr:Attr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);

    newEntry.innerText = menuValue;

    return newEntry;
}

function AddMenuItem(entryName: string): void {
    x--;
    let newEntry:HTMLLIElement = createNewMenuEntry(entryName);
    counter++;
    console.log(`counter is ${counter}`);

    const menu:HTMLElement = document.getElementById(`theMenu`);
    menu.appendChild(newEntry);
    console.log("AddMenuItem called with " + entryName);
}

function createNewMenuEntry(menuValue: string): HTMLLIElement {
    console.log("Let's create a new Menu Entry!");
    x--;
    let newEntry:HTMLLIElement = document.createElement<"li">("li");

    let roleAttr:Attr = document.createAttribute("role");
    roleAttr.value = "menuitem";
    newEntry.attributes.setNamedItem(roleAttr);

    let ariaAttr:Attr = document.createAttribute("aria-label");
    ariaAttr.value = menuValue;
    newEntry.attributes.setNamedItem(ariaAttr);

    newEntry.innerText = menuValue;

    return newEntry;
}