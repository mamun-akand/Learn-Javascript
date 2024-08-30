const API_url = "https://api.github.com/users/mamun-akand";

async function handlePromise() {
    const data = await fetch(API_url);
    const jsonVal = await data.json();
    console.log(jsonVal);
}
handlePromise();