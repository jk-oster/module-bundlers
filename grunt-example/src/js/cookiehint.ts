document.addEventListener("DOMContentLoaded", function() {
    // copy from https://daily-dev-tips.com/posts/vanilla-javascript-cookies/
    document.cookie = "username=Chris; expires=Sun, 01 Jan 2023 12:00:00 UTC";
    document.cookie = "cookie=true; expires=Sun, 01 Jan 2023 12:00:00 UTC";

    const username = getCookie("username");
    console.log(username);
    // Chris

    function getCookie(name: string) {
        // Add the = sign
        name = name + "=";

        // Get the decoded cookie
        const decodedCookie = decodeURIComponent(document.cookie);

        // Get all cookies, split on ; sign
        const cookies = decodedCookie.split(";");

        // Loop over the cookies
        for (let i = 0; i < cookies.length; i++) {
            // Define the single cookie, and remove whitespace
            const cookie = cookies[i].trim();

            // If this cookie has the name of what we are searching
            if (cookie.indexOf(name) == 0) {
                // Return everything after the cookies name
                return cookie.substring(name.length, cookie.length);
            }
        }
    }

    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    console.log(document.cookie);
});