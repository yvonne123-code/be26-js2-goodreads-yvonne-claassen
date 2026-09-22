export function createScoringForm(wrapper) {

    const scoreForm = document.createElement('form');
    scoreForm.classList.add('row', 'g-2', 'text-center', 'mt-2');
    wrapper.append(scoreForm);

    const div = document.createElement('div');
    div.classList.add('col-12');
    scoreForm.append(div);

    const label = document.createElement('label');
    label.innerText = "Ge ditt generella betyg från:";
    label.classList.add('form-label', 'mb-0');
    div.append(label);

    const div2 = document.createElement('div');
    div2.classList.add('col-12', 'd-flex', 'align-items-center', 'justify-content-center', 'gap-2');
    scoreForm.append(div2);

    const scoring = document.createElement('input');
    scoring.type = 'number';
    scoring.min = '1';
    scoring.max = '10';
    scoring.placeholder = '1-10';
    scoring.required = true;
    scoring.name = 'scoreInput'
    scoring.classList.add('scoring', 'form-control');
    div2.append(scoring);

    const btn = document.createElement('button');
    btn.innerText = "Lägg till";
    btn.classList.add('patch');
    div2.append(btn);

    return scoreForm;
}

export function createManualForm() {
    
    const manualForm = document.createElement('form');
    manualForm.classList.add('row', 'g-3', 'text-center');

    const div2 = document.createElement('div');
    div2.classList.add('col-6', 'align-self-center', 'justify-content-center');
    manualForm.append(div2);

    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Titel';
    title.required = true;
    title.name = 'title'
    title.classList.add('form-control');
    div2.append(title);

    const div3 = document.createElement('div');
    div3.classList.add('col-6', 'align-self-center', 'justify-content-center');
    manualForm.append(div3);

    const author = document.createElement('input');
    author.type = 'text';
    author.placeholder = 'Författare';
    author.required = true;
    author.name = 'author'
    author.classList.add('form-control');
    div3.append(author);

    const div4 = document.createElement('div');
    div4.classList.add('col-12', 'align-self-center', 'justify-content-center');
    manualForm.append(div4);

    const year = document.createElement('input');
    year.type = 'number';
    year.placeholder = 'Publicerat år...';
    year.required = true;
    year.name = 'publishYear'
    year.classList.add('form-control');
    div4.append(year);

    const div5 = document.createElement('div');
    div5.classList.add('col-12', 'align-self-center', 'justify-content-center');
    manualForm.append(div5);

    const btn = document.createElement('button');
    btn.innerText = "Lägg till";
    btn.type = 'submit';
    btn.classList.add('patch');
    div5.append(btn);

    return manualForm;
}


