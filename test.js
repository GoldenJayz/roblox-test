const npx = require("noblox.js")

async function startApp() {
    await npx.setCookie("lol cookie goes here")
    .then(() => {
        console.log("Logged into the account successfully");
    })
    .catch(err => {
        console.error(err);
    })
    let currentUser = await npx.getCurrentUser();
    const fq = npx.getFriendRequests(179105579);
    fq
    .then((FriendRequests) => {
        console.log(FriendRequests);
    })
    .catch(err => {
        console.error(err);
    })
    npx.getPlayerInfo(179105579).then((playerInfo) => {
        console.log("This user's status is " + playerInfo.status);
        if(playerInfo.status == "Python, HTML, JS, CSS... All four coding languages lived together in peace and harmony. Until the Python users did not shower. The Python users wiped out the C users.") {
            console.log("working");
        } else {
            console.log("error bro");
        }
      })
      .catch(console.error);
};

startApp();
