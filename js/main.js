// Main JS function that happen on all sites
// Created By: Ryan Purse
// Created On: 15/10/2020

includeHTML();
setPseudoHeaderHeight();

function setPseudoHeaderHeight() {
    /*
        Sets the height of the div under the header
        so that it can off set the page
     */
    document.getElementById("pseudoHeader").style.height = document.getElementById("header").offsetHeight.toString() + "px"
}

function includeHTML() {
    /* Find elements with a specific tag */
    const tag_name = "include";
    const atr_name = "src"; /* attribute tag is will try and look for */
    let includes = document.getElementsByTagName(tag_name);
    for (const include of includes) {
        let include_file_name = include.getAttribute(atr_name);
        if (include_file_name) {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", include_file_name, true);
            xhttp.send();
        }
        else (console.log("File not found"));
    }
}
