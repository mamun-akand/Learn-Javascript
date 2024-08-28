const API_url = "ht0tps://api.github.com/users/mamun-akand";

async function handlePromise() {
    try {
        const data = await fetch(API_url);
        const jsonVal = await data.json();
        console.log(jsonVal);
    } catch (err) {
        console.log(err);
    }
}
handlePromise();


// traditional: Both way possible
// async function handlePromise() {
//     const data = await fetch(API_url);
//     const jsonVal = await data.json();
//     console.log(jsonVal);

// }
// handlePromise().catch(function (err) {
//     console.log(err);
// });