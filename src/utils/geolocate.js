async function getUserLanguage() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const response2 = await fetch(`https://ipapi.co/${data.ip}/languages/`)
        const data2 = await response2.text();

        let lang = data2.split(',')[0].split('-')[0]
        return lang
    } catch (error) {

        console.error('Error fetching IP:', error);
    }
}

export default getUserLanguage