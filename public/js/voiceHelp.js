function help() {
  if (annyang) {
    const commands = {
      'Помоги': function () {
        speak('Выберите картинку, которая содержит текст, который вам необходимо озвучить')
      },
      'Мне плохо': async function () {
        await fetch('/help')
          .then(res => {
            if (res.status === 200) {
              speak('Сообщение отправлено')
            } else if (res.status === 404) {
              speak('Сообщение не отправлено')
            }
          })
      },
      'Медведи': function () {
        speak('Дорогие медведи, хотим пожелать вам успешного старта в вашей карьере, после завершения буткемпа')
      },
      'Мне хорошо': function () {
        speak('И мне хорошо когда вам хорошо')
      },
      'Команды': function () {
        speak('Я зная команды: помоги, мне хорошо, мне плохо')
      },
    }
    annyang.init(commands)
    annyang.setLanguage('ru')
    annyang.start()
  }
}

help()
