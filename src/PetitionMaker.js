
const API_URL = 'http://localhost:8000';
export const getAllTypePieces = async () => {
    const res = await fetch(`${API_URL}/all_types`, {headers: {'X-session-user': sessionStorage.getItem('logged_user')}});
    /*fetch(`${API_URL}/all_types`).then((res) => {
        Equivalent as the code above
    }) */
    if(!res.ok) {
        throw 'ERROR:\n' + res.statusText;
    }
    return await res.json();
};

export const getAllPiecesFromConcreteType = async (id) => {
    const res = await fetch(`${API_URL}/pieces_from_type?id=${id}`, {headers: {'X-session-user': sessionStorage.getItem('logged_user')}});
    if(!res.ok) {
        throw 'ERROR:\n' + res.statusText;
    }
    return await res.json();
};

export const checkLogin = async (user, password) => {
    const res = await fetch(`${API_URL}/login`, {method: "POST", body: JSON.stringify({"name": user, "password": password})});
    if(!res.ok) {
        throw 'ERORR:\\n' + res.statusText;
    }
    return await res.json();
    
};