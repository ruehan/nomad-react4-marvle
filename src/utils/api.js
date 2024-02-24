export const fetchCharacters = async (limit) => {
    const response = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=${limit}&orderBy=modified&series=24229,1058,2023`);
    const data = await response.json();
    return data;
}

export const fetchCharactersInfo = async (id) => {
    const response = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`);
    const data = await response.json();
    return data;
}