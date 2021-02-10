const App = {
  data() {
    return {
      placeholder: "Введите ваш текст",
      title: "Список заметок",
      inputValue: "",
      notes: []
    }
  },
  methods: {
    inputChangeHandler({target}) {
      this.inputValue = target.value
    },
    addNewNote() {
      if (this.inputValue.trim() !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ""
      } else {
        this.inputValue = ""
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    toUpperCase(note) {
      return note.toUpperCase()
    }
  }
}

Vue.createApp(App).mount("#app")