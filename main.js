// Developed by @WhMonkey
// Version: 1.0.0
// License: MIT
// Enjoy!

// User Interface, real one coming soon


// Main function
alert("Injecting Ice Dodo Hack... (1/2)")
document.addEventListener("keyup",function(evt){
    if(evt.keyCode=="67"&&evt.altKey&&evt.ctrlKey){
        main();
    }});
alert("Injecting Ice Dodo Hack... (2/2)")
wait(1000);
alert("🧊 Welcome to Ice Dodo Hack! Some features are still in development. 🧊\n\nPress CTRL + ALT + C to open the cheat panel. \n\n🧊 Enjoy! 🧊");
function main() {
    // Get the user's input
    var input = prompt("                                           🧊 -- Cheat Panel -- 🧊\n\nInsta Win (1)\n\nUnlock premium levels (2)\n\nSet gravity (3)\n\nSpawn in an object (4)\n\nRefresh POV (5)\n\n🧊 More Coming Soon <3 🧊");
    // Check if the user's input is valid
    if (input == null || input == "") {
        // If the user's input is invalid, show an error
        alert("You need to enter something to hack!");
    } else {
     

        // Start the hack
        if (input == "1") {
            change_state.win();
        } else if (input == "2") {
            premium.updatePremiumRequirementMet()
        } else if (input == "3") {
            let gravity = prompt("Enter the gravity you want to set (needs to be redone everytime you die) ");
            update.set_gravity(gravity)
        } else if (input == "4") {
            let gentype = prompt("What do you want to spawn in? cone (1) [More coming soon!] ");
            let away = prompt("How far do you want it to be away from you? ");
            px = player.position.x + away
            py = player.position.y + away
            pz = player.position.z + away
            const poslist = [px, py, pz]
            if (gentype == "1") {
                maker.make_cone(poslist, true)
            } else if (gentype == "2") {
                maker.make_ending(poslist)
            } else {
                alert("That is not a valid option!")
        }
    
    } else if (input == "5") {
        cc.refresh()
    }

}
    }

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
