
    var arr = [];
    var dot = false;

    function enter(value) {
      let last = arr[arr.length - 1];

      if (op(value)) {
        if (op(last)) {
          arr.pop();
        }
        dot = false; 
      }

      if (value === '.') {
        if (arr.length === 0 || op(last)) {
          arr.push('0');
        }
        if (dot) {
          return;
        }
        dot = true;
      }

      arr.push(value);
      changeInput();
    }

    function op(char) {
      return ['+', '-', '*', '/', 'x'].includes(char);
    }

    function del() {
      let removed = arr.pop();
      if (removed === '.') {
        dot = false;
      }
      changeInput();
    }

    function changeInput() {
      document.getElementById('inp').value = arr.join('');
    }

    function rst() {
      arr = [];
      dot = false;
      changeInput();
    }

    function opequal() {
      try {
        let expression = arr.join('').replace('x', '*');
        let result = eval(expression);
        arr = [result.toString()];
        dot = arr[0].includes('.');
        changeInput();
      } catch (e) {
        alert('Error: Not a valid expression');
        rst();
      }
    }
