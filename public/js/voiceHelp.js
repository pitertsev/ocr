function help() {
  if (annyang) {
    const commands = {
      'Помоги': function() {
        speak('Выберите картинку, которая содержит текст, который вам необходимо озвучить');
      },
      'Мне плохо': async function () {
        await fetch('/help')
          .then(speak('Сообщение отправлено'))
          .catch(speak('Сообщение не отправлено'))
      },
    }
    annyang.init(commands)
    annyang.setLanguage('ru')
    annyang.start()
  }
}

help()
