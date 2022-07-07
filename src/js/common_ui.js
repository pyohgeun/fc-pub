const siblings = t => [...t.parentElement.children].filter(e => e != t);
const fc = {
    inputLineType: function(){
        let inputLines = document.querySelectorAll('.input-line input');
        let btnReset = document.querySelectorAll('.input-line .btn-input-reset');
        let isValueIn = (target) => {
            if(target.value.length > 0){
                return true
            } else {
                return false
            }
        }
        inputLines.forEach((e)=>{
            // 값이 있을 경우 reset 버튼 노출
            e.addEventListener('input', (e) => {
                let parent = e.target.closest('.input-line');
                if(isValueIn(e.target)){
                    parent.classList.add('is-value-in');
                } else {
                    parent.classList.remove('is-value-in');
                }
            });
            e.addEventListener('focus', (e) => {
                let parent = e.target.closest('.input-line');
                parent.classList.add('focused');
            });
            e.addEventListener('blur', (e) => {
                let parent = e.target.closest('.input-line');
                parent.classList.remove('focused');
            });

        });
        btnReset.forEach((e) => {
            e.addEventListener('click', (e) => {
                e.target.previousElementSibling.value = "";
                console.log(e.target.closest('.input-line'));
                e.target.closest('.input-line').classList.remove('is-value-in');
            })
        })
    }
}

document.addEventListener("DOMContentLoaded", function(){
    // for(let item in fc){
    //     fc[item]();
    // }
})