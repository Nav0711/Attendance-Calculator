
function calculateAttendance(totalClasses, attendedClasses, requiredPercentage) {
    if (totalClasses <= 0 || attendedClasses < 0 || attendedClasses > totalClasses) {
        return "Invalid input. Please enter valid numbers.";
    }

    let attendancePercentage = (attendedClasses / totalClasses) * 100;
    let requiredClasses = (((requiredPercentage) / 100) * totalClasses - attendedClasses) / (1 - (requiredPercentage ) / 100);
    let notrequiredClasses = (attendedClasses - ((requiredPercentage) / 100) * totalClasses) / ((requiredPercentage) / 100);

    let classesNeededMessage = "";
    if (requiredClasses+1 > 0) {
        classesNeededMessage = "Required classes are: " + Math.ceil(requiredClasses) + " to maintain " + requiredPercentage + "% attendance!";
    } else if (requiredClasses+1 === 0) {
        classesNeededMessage = "You are exactly at " + requiredPercentage + "% attendance!";
    } else {
        classesNeededMessage = "Classes You can skip are: " + Math.floor(notrequiredClasses) + " to maintain " + requiredPercentage + "% attendance!";
    }

    return {
        currentPercentage: attendancePercentage.toFixed(2) + "%",
        classesNeeded: classesNeededMessage
    };

}

function calculate() {
    let totalClasses = Number(document.getElementById("totalClasses").value);
    let attendedClasses = Number(document.getElementById("attendedClasses").value);
    let requiredPercentage = Number(document.getElementById("PercentageReq").value);

    let result = calculateAttendance(totalClasses, attendedClasses, requiredPercentage);
    document.getElementById("result").innerHTML = "Current Attendance: " + result.currentPercentage + "<br>" + result.classesNeeded;
}



