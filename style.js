
// =============================== total cost part ========================== //

//================common function==========//
function inputValueById(targetedElementId) {
    const inputFieldElement = document.getElementById(targetedElementId);
    const inputFieldValue = inputFieldElement.value;
    const inputValue = parseFloat(inputFieldValue);
    return inputValue;
}
// =============//
// 
const totalPlayer = 5;

const playerExpensiveCalculate = document.getElementById("calculate-player-expensive-js")
playerExpensiveCalculate.addEventListener("click", function () {
    const perPlayerExpensive = inputValueById("per-player-expensive-js")
    if (perPlayerExpensive >= 0) {
        const calculate = totalPlayer * perPlayerExpensive;
        const totalPlayerExpensive = document.getElementById("total-player-expensive-js");
        totalPlayerExpensive.innerText = calculate;

    }
    else {

        alert("Please Fill Input Field !!! Note: Input Field Can't Contain with Negative Number Or 00")
    }
})




const calculateTotal = document.getElementById("calculate-total-js")
calculateTotal.addEventListener("click", function () {
    const totalPlayerExpenses = document.getElementById("total-player-expensive-js").innerText;
    const managerCost = inputValueById("manager-expensive-js")
    const coachCost = inputValueById("coach-expensive-js")
    const totalPlayerCost = parseFloat(totalPlayerExpenses)
    if ((managerCost >= 0) && (coachCost >= 0)) {
        const totalCost = totalPlayerCost + managerCost + coachCost;
        document.getElementById("total-expensive-js").innerText = totalCost;
    }
    else
        alert("Please Fill Input Field !!! Note: Input Field Can't Contain with Negative Number")
})

// ============================================================================= //