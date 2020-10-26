/*
 * Drop down functionality
 * Created on: 26/10/2020
 * @author: Ryan Purse
 */

function toggleDropDown() {
    let div = document.getElementById("drop-down");
    if (div.style.display === "none") {
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}
