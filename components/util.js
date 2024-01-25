/**
 * Problem: url path of localhost link and github is different, there will be some url issues after deployment.
 * Solution: Checking the url path and making sure its using the correct path.
 * @param {*} window.location.href
 * @returns {string}
 */
export function getRealUrl(window_location) {
    const urlParts = window_location.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    // if (lastPart.includes("html")) {
    //     urlParts.pop()
    //     return urlParts.join('/')
    // } else {
    //     return urlParts.join('/')
    // }
    urlParts.pop()
    return urlParts.join('/')
}
