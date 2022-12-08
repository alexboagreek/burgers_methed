export const getData = url => {
    const response = fetch(url).then();
    console.log('response: ', response);
}