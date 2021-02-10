// todo название переменной с маленькой буквы, с большой только названия классов
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
    // todo убрать метод (подсказка в index.html)
    inputChangeHandler({target}) {
      this.inputValue = target.value
    },
    addNewNote() {
      // todo сравнение с пустой строкой лишнее
      // todo придумать как убрать блок else
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
    // todo лишний метод
    toUpperCase(note) {
      return note.toUpperCase()
    }
  }
}

// todo сделать как в остальных примерах
Vue.createApp(App).mount("#app")
