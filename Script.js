function selectStep(element) {

  const allSteps = document.querySelectorAll('.step-box');


  allSteps.forEach(box => {
    box.classList.remove('active');
  });

  element.classList.add('active');
}