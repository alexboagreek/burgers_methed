export const getData = url => {
    const response = fetch(url);
    console.log('response: ', response);
}