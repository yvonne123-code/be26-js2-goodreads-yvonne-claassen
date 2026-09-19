// imports 


// functions 

export function createForm(wrapper) {

    const scoreForm = document.createElement('form');
    wrapper.append(scoreForm);

    const label = document.createElement('label');
    label.innerText = "Ge ditt generella betyg från:";
    scoreForm.append(label);

    const scoring = document.createElement('input');
    scoring.type = 'number';
    scoring.min = '1';
    scoring.max = '10';
    scoring.placeholder = '1-10';
    scoring.required = true;
    scoring.name = 'scoreInput'
    scoring.classList.add('scoring');
    scoreForm.append(scoring);

    const btn = document.createElement('button');
    btn.innerText = "skicka";
    btn.classList.add('patch');
    scoreForm.append(btn);

    return scoreForm; 

    

}
export async function patchFunction(number) {
    console.log("test");

    



    // 

    // btn.addEventListener('click', async (event) => {
    //     event.preventDefault();
    //     const score = parseInt(scoring.value);
    //     // console.log(typeof score);

    //     try {
    //         await book.patchScore(score);
    //         book.setScore(score)
    //         scoreForm.remove();
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }

    // })

}

