export function createListItem(ul) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    ul.append(li);
    return li; 
}

export function createListItemBold(ul) {
    const li = document.createElement('li');
    li.classList.add('list-group-item','fw-bold');
    ul.append(li);
    return li; 
}

export function createList() {
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush', 'mb-3', 'text-center');
    return ul;

}