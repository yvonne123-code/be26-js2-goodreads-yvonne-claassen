export function createDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete', 'd-block', 'mx-auto');
    deleteBtn.innerText = "Radera Bok";
    return deleteBtn;
}

export function createReadBtn() {
    const readBtn = document.createElement('button');
    readBtn.classList.add('patch');
    readBtn.innerText = "Markera som läst";
    return readBtn;
}

export function createPostBtn() {
    const addBtn = document.createElement('button');
    addBtn.innerText = "Lägg till i din lista";
    addBtn.classList.add('patch');
    return addBtn; 
}