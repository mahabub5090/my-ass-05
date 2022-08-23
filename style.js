//======================== player Selection ================================//

const selectBtns = document.getElementsByClassName("select-btn")
for (const selectBtn of selectBtns) {
    selectBtn.addEventListener("click", function (e) {
        const targetBtn = e.target;
        const parent = targetBtn.parentNode.parentNode
        const targetEventPlayer = parent.querySelector("h5")
        const targetEventPlayerName = targetEventPlayer.innerText
        const counter = (document.getElementById("ol").childNodes.length) - 1;
       
        if (counter >= 5) {
            alert("You Can't Select More Then 5 Player")
        }
        else {
            createNewLi(targetEventPlayerName)

            targetBtn.disabled = true;

            targetBtn.classList.add("bg-danger");
            
        }
    })
}


// =============================== total cost part ========================== //




const playerExpensiveCalculate = document.getElementById("calculate-player-expensive-js")
playerExpensiveCalculate.addEventListener("click", function () {
    const perPlayerExpensive = inputValueById("per-player-expensive-js")
    if (perPlayerExpensive >= 0) {
        const totalPlayer = parseInt((document.getElementById("ol").childNodes.length) - 1);
        const calculate = totalPlayer * perPlayerExpensive;
        const totalPlayerExpensive = document.getElementById("total-player-expensive-js");
        totalPlayerExpensive.innerText = calculate;
        console.log(calculate)

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