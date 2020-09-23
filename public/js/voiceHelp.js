function help() {
  if (annyang) {
    const commands = {
      Помоги() {
        alert('help')
      },
    }
    annyang.init(commands)
    annyang.setLanguage('ru')
    annyang.start()
  }
}

help()
