const URL_API = "http://localhost:3001/api/v1";

// Fonction asynchrone pour récupérer les comptes de l'utilisateur
export async function fetchAccounts(token, userId) {
    const response = await fetch(`${URL_API}/user/${userId}/accounts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
            Authorization: `Bearer ${token}`,
        },
    });
    return await response.json();
}

// Fonction asynchrone pour récupérer les transactions d'un compte spécifique
export async function fetchTransactions(token, accountId) {
    const response = await fetch(`${URL_API}/accounts/${accountId}/transactions`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
            Authorization: `Bearer ${token}`,
        },
    });
    return await response.json();
}

// Fonction asynchrone pour modifier la catégorie d'une transaction spécifique
export async function updateTransactionCategory(token, transactionId, newCategory) {
    const response = await fetch(`${URL_API}/transactions/${transactionId}/category`, {
        method: "PATCH",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            category: newCategory,
        }),
    });
    return await response.json();
}

// Fonction asynchrone pour modifier la note d'une transaction spécifique
export async function updateTransactionNote(token, transactionId, newNote) {
    const response = await fetch(`${URL_API}/transactions/${transactionId}/note`, {
        method: "PATCH",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            note: newNote,
        }),
    });
    return await response.json();
}

// Fonction asynchrone pour supprimer la note d'une transaction spécifique
export async function deleteTransactionNote(token, transactionId) {
    const response = await fetch(`${URL_API}/transactions/${transactionId}/note`, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return await response.json();
}
