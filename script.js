////////////////////////////
// Constants
import { sites } from "./config.js";

////////////////////////////
const metadata = {
    pinewood: "ewogICAgImdyb3VwIjogIjhlNzczZGIyOTcyOTg4NWQzMzA5YzIwYzM1ZjQ3YmNhODFkN2NiMDciLAogICAgImdyb3Vwc29mdHdhcmUiOiJiOTUwYjUzZTg2ODBjMjc4ZWUwMDBkMDA4ZTQ3MjM2NWIxMmQ5MTczIgp9",
    sab: "ewoiZ3JvdXAiOiI4ZTc3M2RiMjk3Mjk4ODVkMzMwOWMyMGMzNWY0N2JjYTgxZDdjYjA3IiwKImdyb3Vwc29mdHdhcmUiOiIzMzIyNTRjM2YyYTkxZGIwNjA1ZTM0NDVhYzg5NGJlYmY3NzIzY2VlIgp9",
    jardine: "ewogICAgImdyb3VwIjoiOTc1MjhlNmVmOTdmMzJiNWY2NTAzOWQ5OWJkODJiNGYwNDU3ZDdkMiIsCiAgICAiZ3JvdXBzb2Z0d2FyZSI6IjVmNDMwYTFjZTJhMDVhZmE2Njg2MjQ3NmRmNGY2NzUyNDE0ZDJjNGYiCn0=",
    solUk: "ewogICAgImdyb3VwIjogIjhhNGUwNTA3ZGI0MWU4YjE5NmVjMmVmZDBjNjgyODI4MDM0ZDdhZjciLAogICAgImdyb3Vwc29mdHdhcmUiOiJkMzlkODRkZmIxZDY4ZDI5ZTliNDE0MGY1YjEyOTEwODg2MDQ1MzFlIgp9",
    solNonUk: "ewogICAgImdyb3VwIjogImIzOTJiZjEyMTk5NjNjZmFlYWQ0MmVhNzZjNjlkMjMzMDQ2NDJlNGEiLAogICAgImdyb3Vwc29mdHdhcmUiOiI0ZTg3ZTE1NDRhOWE3NGNlYzk2NmZkZmM5YWVhMzc0OGQxM2YwMDAzIgp9"
};

const config = {
    pinewood: {
        localSite: "pw.html",
        metadata: "ewogICAgImdyb3VwIjogIjhlNzczZGIyOTcyOTg4NWQzMzA5YzIwYzM1ZjQ3YmNhODFkN2NiMDciLAogICAgImdyb3Vwc29mdHdhcmUiOiJiOTUwYjUzZTg2ODBjMjc4ZWUwMDBkMDA4ZTQ3MjM2NWIxMmQ5MTczIgp9",
    },
    sab: {
        localSite: "sab.html",
        metadata: "ewoiZ3JvdXAiOiI4ZTc3M2RiMjk3Mjk4ODVkMzMwOWMyMGMzNWY0N2JjYTgxZDdjYjA3IiwKImdyb3Vwc29mdHdhcmUiOiIzMzIyNTRjM2YyYTkxZGIwNjA1ZTM0NDVhYzg5NGJlYmY3NzIzY2VlIgp9",
    },
    jardine: {
        localSite: "",
        metadata: "ewogICAgImdyb3VwIjoiOTc1MjhlNmVmOTdmMzJiNWY2NTAzOWQ5OWJkODJiNGYwNDU3ZDdkMiIsCiAgICAiZ3JvdXBzb2Z0d2FyZSI6IjVmNDMwYTFjZTJhMDVhZmE2Njg2MjQ3NmRmNGY2NzUyNDE0ZDJjNGYiCn0=",
    },
    solUk: {
        localSite: "",
        metadata: "ewogICAgImdyb3VwIjogIjhhNGUwNTA3ZGI0MWU4YjE5NmVjMmVmZDBjNjgyODI4MDM0ZDdhZjciLAogICAgImdyb3Vwc29mdHdhcmUiOiJkMzlkODRkZmIxZDY4ZDI5ZTliNDE0MGY1YjEyOTEwODg2MDQ1MzFlIgp9",
    },
    solNonUk: {
        localSite: "solNonUk.html",
        metadata: "ewogICAgImdyb3VwIjogImIzOTJiZjEyMTk5NjNjZmFlYWQ0MmVhNzZjNjlkMjMzMDQ2NDJlNGEiLAogICAgImdyb3Vwc29mdHdhcmUiOiI0ZTg3ZTE1NDRhOWE3NGNlYzk2NmZkZmM5YWVhMzc0OGQxM2YwMDAzIgp9",
    },
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
const radConfiguredPage = document.querySelector('#radConfiguredPage');
const eleSites = document.querySelector('#links');

////////////////////////////
// Functions
////////////////////////////

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

const openModal = function (textContent) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.querySelector(".text-modal").innerHTML = textContent;
};

const navigateTo = function (provider) {
    openModal(`Please wait! Navigating...`);
    setTimeout(function () {
        closeModal();
        openNewTab(provider);
    }, 1000);
};

const openNewTab = function (provider) {
    let domain = radLocalhost.checked ? 'localhost' : radLocalIp.checked ? txtLocalIp.value : undefined;
    let providerMetadata = '';
    let localSite = '';
    switch (provider) {
        case 'pw':
            providerMetadata = config.pinewood.metadata;
            localSite = config.pinewood.localSite;
            break;
        case 'sab':
            providerMetadata = config.sab.metadata;
            localSite = config.sab.localSite;
            break;
        case 'jardine':
            providerMetadata = config.jardine.metadata;
            localSite = config.jardine.localSite;
            break;
        case 'solUk':
            providerMetadata = config.solUk.metadata;
            localSite = config.solUk.localSite;
            break;
        case 'solNonUk':
            providerMetadata = config.solNonUk.metadata;
            localSite = config.solNonUk.localSite;
            break;
    }
    const url = (typeof domain !== 'undefined') ? `http://${domain}:8080/?metadata=${providerMetadata}` : `${window.location.href}${localSite}`;
    window.open(url, '_blank').focus();
};

////////////////////////////
// Events
////////////////////////////

btnNavigateToPw.addEventListener('click', function () {
    navigateTo('pw');
});

btnNavigateToJardine.addEventListener('click', function () {
    navigateTo('jardine');
});

btnNavigateToSab.addEventListener('click', function () {
    navigateTo('sab');
});

btnNavigateToSolUk.addEventListener('click', function () {
    navigateTo('solUk');
});

btnNavigateToSolNonUk.addEventListener('click', function () {
    navigateTo('solNonUk');
});

radLocalhost.addEventListener('change', function () {
    radLocalhost.checked = true;
    txtLocalIp.disabled = true;
});

radLocalIp.addEventListener('change', function () {
    radLocalIp.checked = true;
    txtLocalIp.disabled = false;
});

radConfiguredPage.addEventListener('change', function () {
    radConfiguredPage.checked = true;
    txtLocalIp.disabled = true;
});

const loadSites = function () {
    let urls = '';
    let count = 0;
    sites.forEach((rec) => {
        urls += `<tr>
                <td>${count++}</td>
                <td>    
                    <a href="${rec.url}" target="_blank">${rec.siteName}</a>
                </td>
                <td>${rec.note}</td>
            </tr>`;
    });
    const html = `<table>
        <tr>
            <th>No</th>
            <th>Url</th>
            <th>Note</th>
        </tr>
            ${urls}
        </table>`;
    eleSites.insertAdjacentHTML('beforeend', html);
};

window.addEventListener('load', loadSites);