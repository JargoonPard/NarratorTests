var counter = 0;
function createNewMenuEntryNew(menuValue) {
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
    var newEntry = createNewMenuEntry(entryName);
    counter++;
    var menu = document.getElementById("theMenu");
    menu.appendChild(newEntry);
}
function createNewMenuEntry(menuValue) {
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
//# sourceMappingURL=menu.js.map