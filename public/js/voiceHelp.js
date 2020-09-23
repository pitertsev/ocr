function help() {
  if (annyang) {
    const commands = {
    'Помоги': function() {
      speak('Выберите картинку, которая содержит текст, который вам необходимо озвучить');
    }}
    annyang.init(commands)
    annyang.setLanguage('ru')
    annyang.start()
    }
}

help()
