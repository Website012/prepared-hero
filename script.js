function getCurrentDate() {
    const date = new Date();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}${month}${year}`;
}

function updateJobID() {
    const jobElement = document.getElementById("jobID");
    const date = getCurrentDate();
    jobElement.textContent = "ID: " + date;
}

// Wait for 2 minutes (120000 milliseconds) before updating the job ID
setTimeout(updateJobID, 120000);