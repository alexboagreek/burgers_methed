export const getData = async (url) => {
    const response = await fetch(url);
    console.log('response: ', response);
};