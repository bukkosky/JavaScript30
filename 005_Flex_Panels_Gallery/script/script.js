 const panels = document.querySelectorAll('.panel');

 function toggleOpen() {
     console.log('Hello')
     this.classList.add('open');
 }

 function toggleActive(e){
     console.log(e.propertyName)
     if (e.propertyName.includes('flex')) {
        this.classList.add('open-active');
      }
 }
 panels.forEach(panel => panel.addEventListener('click', toggleOpen));
 panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));