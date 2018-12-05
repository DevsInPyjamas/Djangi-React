
const API_URL = 'http://localhost:8000';
export const getAllTypePieces = async () => {
    const res = await fetch(`${API_URL}/all_types`);
    /*fetch(`${API_URL}/all_types`).then((res) => {
        Equivalent as the code above
    }) */
    if(!res.ok) {
        throw 'ERROR:\n' + res.statusText;
    }
    return await res.json();
};