let correctAnswers = ['A','B', 'B', 'B'];
let form = document.querySelector('.quiz-form');
let score = document.querySelector('.score')

form.addEventListener('submit',e=>{
      e.preventDefault();
      
      let result = 0;
      let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
      
      userAnswers.forEach((answer,index)=>{
            if(answer===correctAnswers[index]){
                  result+= 25;
            }
      })

      scrollTo(0,0);
     

      let output = 0;
     let timer = setInterval(()=>{ 
         
      score.querySelector('span').textContent = `${output}%`;
      if(output=== result){
            clearInterval(timer);
      }else{
            output++;
      }
      },100)
      // show result

      score.classList.remove('d-none');

})