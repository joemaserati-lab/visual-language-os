const words=[...document.querySelectorAll('[data-progressive-recognition]')];
const states=['Redaction 100','Redaction 70','Redaction 50','Redaction 35'];

function seededOrder(length){
  return Array.from({length},(_,i)=>i).sort((a,b)=>((a*37)%length)-((b*37)%length));
}

function setupWord(el){
  const text=el.textContent.trim();
  el.innerHTML='';
  const order=seededOrder(text.length || 1);
  [...text].forEach((char,i)=>{
    const span=document.createElement('span');
    span.textContent=char===' ' ? '\u00A0' : char;
    span.dataset.order=order.indexOf(i);
    el.appendChild(span);
  });
}

function updateWord(el){
  const rect=el.getBoundingClientRect();
  const vh=window.innerHeight;
  const start=vh*.9;
  const end=vh*.52;
  const progress=Math.min(1,Math.max(0,(start-rect.top)/(start-end)));
  const spans=[...el.querySelectorAll('span')];
  spans.forEach(span=>{
    const delay=Number(span.dataset.order)/(spans.length||1)*.28;
    const p=Math.min(1,Math.max(0,(progress-delay)/(1-delay)));
    const stateIndex=Math.min(states.length-1,Math.floor(p*states.length));
    span.style.fontFamily=`'${states[stateIndex]}','Redaction 35','Geist',sans-serif`;
    span.style.transform=`translateY(${(1-p)*.06}em)`;
  });
}

function loop(){words.forEach(updateWord);requestAnimationFrame(loop)}

words.forEach(setupWord);
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){loop();}
else{words.forEach(el=>{el.style.fontFamily="'Redaction 35','Geist',sans-serif";});}
