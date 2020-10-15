// Main JS function that happen on all sites
// Created By: Ryan Purse
// Created On: 15/10/2020


setPseudoHeaderHeight();

function setPseudoHeaderHeight() {
    /*
        Sets the height of the div under the header
        so that it can off set the page
     */

    let headerHeight = document.getElementById("header").offsetHeight;
    document.getElementById("pseudoHeader").style.height = headerHeight.toString() + "px";
}
