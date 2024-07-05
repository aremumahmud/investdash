import uri from "../utils/urls";

async function Addfunds(amount, user_id) {
    try {
        const response = await fetch(uri.server + "add_funds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("site")
            },
            body: JSON.stringify({
                amount,
                user_id
            })
        });

        const res = await response.json();
        console.log(res)
        return res

    } catch (err) {
        return Promise.reject({ error: true, message: 'An unexpected error occured, Please click the button below to reload this page' })
    }
}

export default Addfunds