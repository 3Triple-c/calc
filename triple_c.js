document.addEventListener('DOMContentLoaded', function () {
    const atmButtons = document.querySelectorAll('.atm-button');
    const screen = document.querySelector('.atm-screen');
    let expression = '';
  
    atmButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const buttonText = button.textContent;
  
        if (buttonText === 'AC') {
          expression = '';
        } else if (buttonText === '=') {
          try {
            expression = eval(expression);
            if (!isNaN(expression) && isFinite(expression) && expression % 1 !== 0) {
              expression = parseFloat(expression).toFixed(7);
            }
          } catch (error) {
            expression = 'Error';
          }
        } else if (buttonText === 'DEL') {
          expression = expression.slice(0, -1);
        } else {
          expression += buttonText;
        }
  
        screen.textContent = expression;
      });
    });
  });
  