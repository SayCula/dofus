const onoff = document.querySelector("#on-off");

function updateStatus(isOnline) {
    if (isOnline) {
        onoff.innerText = "You're Online :)";
    } else {
        onoff.innerText = "You're Offline";
        // Redirect to a specific page when offline
        window.location.href = "offline-page.html";
    }
}

function checkOnlineStatus() {
    if ("onLine" in navigator) {
        updateStatus(navigator.onLine);
    } else {
        onoff.innerText = "Online status cannot be determined.";
    }
}

window.addEventListener("online", function(){
    updateStatus(true); 
});

window.addEventListener("offline", function() {
    updateStatus(false);
});

checkOnlineStatus();