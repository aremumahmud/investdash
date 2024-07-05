import uri from "../utils/urls";

async function Make_payment(text) {
    try {
        const response = await fetch(uri.server + "make_payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("site")
            },
            body: JSON.stringify(
                text
            )
        });

        const res = await response.json();
        // console.log(res)
        return res

    } catch (err) {
        return Promise.reject({ error: true, message: 'An unexpected error occured, Please click the button below to reload this page' })
    }
}

export default Make_payment