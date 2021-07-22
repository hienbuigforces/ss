////////////////////////////
// Constants
////////////////////////////
const metadata = {
    pinewood: "ewogICAgImdyb3VwIjogIjhlNzczZGIyOTcyOTg4NWQzMzA5YzIwYzM1ZjQ3YmNhODFkN2NiMDciLAogICAgImdyb3Vwc29mdHdhcmUiOiJiOTUwYjUzZTg2ODBjMjc4ZWUwMDBkMDA4ZTQ3MjM2NWIxMmQ5MTczIgp9",
    sab: "ewoiZ3JvdXAiOiI4ZTc3M2RiMjk3Mjk4ODVkMzMwOWMyMGMzNWY0N2JjYTgxZDdjYjA3IiwKImdyb3Vwc29mdHdhcmUiOiIzMzIyNTRjM2YyYTkxZGIwNjA1ZTM0NDVhYzg5NGJlYmY3NzIzY2VlIgp9",
    jardine: "ewogICAgImdyb3VwIjoiOTc1MjhlNmVmOTdmMzJiNWY2NTAzOWQ5OWJkODJiNGYwNDU3ZDdkMiIsCiAgICAiZ3JvdXBzb2Z0d2FyZSI6IjVmNDMwYTFjZTJhMDVhZmE2Njg2MjQ3NmRmNGY2NzUyNDE0ZDJjNGYiCn0=",
    solUk: "ewogICAgImdyb3VwIjogIjhhNGUwNTA3ZGI0MWU4YjE5NmVjMmVmZDBjNjgyODI4MDM0ZDdhZjciLAogICAgImdyb3Vwc29mdHdhcmUiOiJkMzlkODRkZmIxZDY4ZDI5ZTliNDE0MGY1YjEyOTEwODg2MDQ1MzFlIgp9",
    solNonUk: "ewogICAgImdyb3VwIjogImIzOTJiZjEyMTk5NjNjZmFlYWQ0MmVhNzZjNjlkMjMzMDQ2NDJlNGEiLAogICAgImdyb3Vwc29mdHdhcmUiOiI0ZTg3ZTE1NDRhOWE3NGNlYzk2NmZkZmM5YWVhMzc0OGQxM2YwMDAzIgp9"
};

////////////////////////////
// Selectors
////////////////////////////
const btnNavigateToPw = document.querySelector('#btnNavigateToPw');
const btnNavigateToJardine = document.querySelector('#btnNavigateToJardine');
const btnNavigateToSab = document.querySelector('#btnNavigateToSab');
const btnNavigateToSolUk = document.querySelector('#btnNavigateToSolUk');
const btnNavigateToSolNonUk = document.querySelector('#btnNavigateToSolNonUk');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const radLocalhost = document.querySelector('#radLocalhost');
const radLocalIp = document.querySelector('#radLocalIp');
const txtLocalIp = document.querySelector('#txtLocalIp');

////////////////////////////
// Functions
////////////////////////////

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

const openModal = function(textContent) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.querySelector(".text-modal").innerHTML = textContent;
};

const navigateTo = function(provider) {
    openModal(`Please wait! Navigating...`);
    setTimeout(function() {
        closeModal();
        openNewTab(provider);
    }, 2000);
}

const openNewTab = function(provider) {
    let domain = radLocalhost.checked ? 'localhost' : txtLocalIp.value;
    let providerMetadata = '';
    switch (provider) {
        case 'pw':
            providerMetadata = metadata.pinewood;
            break;
        case 'sab':
            providerMetadata = metadata.sab;
            break;
        case 'jardine':
            providerMetadata = metadata.jardine;
            break;
        case 'solUk':
            providerMetadata = metadata.solUk;
            break;
        case 'solNonUk':
            providerMetadata = metadata.solNonUk;
            break;
    }
    let url = `http://${domain}:8080/?metadata=${providerMetadata}`
    window.open(url, '_blank').focus();
}

////////////////////////////
// Events
////////////////////////////

btnNavigateToPw.addEventListener('click', function() {
    navigateTo('pw');
});

btnNavigateToJardine.addEventListener('click', function() {
    navigateTo('jardine');
});

btnNavigateToSab.addEventListener('click', function() {
    navigateTo('sab');
});

btnNavigateToSolUk.addEventListener('click', function() {
    navigateTo('solUk');
});

btnNavigateToSolNonUk.addEventListener('click', function() {
    navigateTo('solNonUk');
});

radLocalhost.addEventListener('change', function() {
    radLocalhost.checked = true;
    txtLocalIp.disabled = true;
})

radLocalIp.addEventListener('change', function() {
    radLocalIp.checked = true;
    txtLocalIp.disabled = false;
})