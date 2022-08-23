//================common function==========//
function inputValueById(targetedElementId) {
    const inputFieldElement = document.getElementById(targetedElementId);
    const inputFieldValue = inputFieldElement.value;
    const inputValue = parseFloat(inputFieldValue);
    return inputValue;
}
// =============//
// 
// create-new-li
function createNewLi(text) {
    const li = document.createElement("li")
    li.innerText = text;
    const ol = document.getElementById("ol")
    ol.appendChild(li)
}
