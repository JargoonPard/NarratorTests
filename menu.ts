function createNewMenuEntryNew(menuValue: string): HTMLLIElement {
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
    let newEntry = createNewMenuEntry(entryName);

    const menu = document.getElementById(`theMenu`);
    menu.appendChild(newEntry);
}

function createNewMenuEntry(menuValue: string): HTMLLIElement {
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