window.addEventListener('DOMContentLoaded', function () {

  // inputmask
  const selector = document.querySelector(".input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  //validation
  const validation = new JustValidate('#i-form');

  validation

    .addField('#i-name', [
      {
        rule: "function",
        validator: function (name, value) {
          const format = /^[a-zA-Zа-яА-Я]+$/;
          const str = document.getElementById('i-name').value;
          if ( str.length === 0 ) {
            return true
          }
          return format.test(str)
        },
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите не менее 3 букв',
      },
      {
        rule: 'maxLength',
        value: 10,
        errorMessage: 'Введите не более 10 букв',
      }
    ],
      {
        errorLabelStyle: {
          color: "#D11616",
        },
      }
    )

    .addField('#i-tel', [
      {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
      }
    ],
      {
        errorLabelStyle: {
          color: "#D11616",
        },
      }
    );
  // end validation

  var name = document.getElementById('i-name');
  name.oninput = function() {
    if ( name.value.length === 0 ) {
      name.classList.remove('input-oniput');
      return
    }
    name.classList.add('input-oniput')
  }

// end window.addEventListener('DOMContentLoaded', function () {} );
});
