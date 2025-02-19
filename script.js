
function calculateAttendance(totalClasses, attendedClasses, requiredPercentage) {
    if (totalClasses >= 0 && attendedClasses > 0 && attendedClasses <= totalClasses) {
        let attendancePercentage = (attendedClasses / totalClasses) * 100;
        let requiredClasses = Math.ceil((((requiredPercentage) / 100) * totalClasses - attendedClasses) / (1 - (requiredPercentage) / 100));
        let notrequiredClasses = Math.floor((attendedClasses - ((requiredPercentage) / 100) * totalClasses) / ((requiredPercentage) / 100));
        
        let classesNeededMessage = "";
        if (attendancePercentage < requiredPercentage) {
            classesNeededMessage = "Required classes are: " + (requiredClasses) + " to maintain " + requiredPercentage + "% attendance!";
        }
        else if (attendancePercentage == requiredPercentage) {
            classesNeededMessage = "You are exactly at " + requiredPercentage + "% attendance!";
        }
        else {
            classesNeededMessage = "Classes You can skip are: " + (notrequiredClasses) + " to maintain " + requiredPercentage + "% attendance!";
        }
    
        return {
            currentPercentage: attendancePercentage.toFixed(2) + "%",
            classesNeeded: classesNeededMessage
        };
    }

    else {

        return "Invalid input. Please enter valid numbers.";
    }

}
const button = document.getElementById("clacbtn"); 

window.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    button.click(); 

  }

});

function calculate() {
    let requiredPercentage = Number(document.getElementById("PercentageReq").value);
    let attendedClasses = Number(document.getElementById("attendedClasses").value);
    let totalClasses = Number(document.getElementById("totalClasses").value);

    let result = calculateAttendance(totalClasses, attendedClasses, requiredPercentage);
    if (typeof result === "string") {
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML ="Current percentage is: " + result.currentPercentage + "<br>" + result.classesNeeded;
    }
}



