import uri from "../utils/urls";

async function Removefunds(amount, user_id) {
    try {
        const response = await fetch(uri.server + "remove_funds", {
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

export default Removefunds