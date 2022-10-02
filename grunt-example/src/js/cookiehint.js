"use strict";
document.addEventListener("DOMContentLoaded", function () {
    document.cookie = "username=Chris; expires=Sun, 01 Jan 2023 12:00:00 UTC";
    document.cookie = "cookie=true; expires=Sun, 01 Jan 2023 12:00:00 UTC";
    const username = getCookie("username");
    console.log(username);
    function getCookie(name) {
        name = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
    }
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    console.log(document.cookie);
});
//# sourceMappingURL=cookiehint.js.map