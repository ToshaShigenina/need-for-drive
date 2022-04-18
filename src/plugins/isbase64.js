/* eslint-disable */

function isBase64(str) {
    let strResult = str;
    const separator = 'base64,';
    if (str.includes(separator)) strResult = str.split(separator)[1];
    return (strResult.length % 4 == 0) && /^[a-zA-Z0-9\+/]*={0,3}$/.test(strResult);
}

export default isBase64;