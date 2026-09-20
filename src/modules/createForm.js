export function createForm(wrapper) {

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
    scoring.classList.add('scoring', 'form-control', 'w-auto');
    div2.append(scoring);

    const btn = document.createElement('button');
    btn.innerText = "Lägg till";
    btn.classList.add('patch');
    div2.append(btn);

    return scoreForm; 
}


