const app = Vue.createApp({ //instance 
  data() {
    return { //parameters 
      showBooks: false,
      showLogin: true,
      username: "",
      password: "",
      books: [ //objects
        { title: 'The Girl and the Goddess', author: 'Nikita Gill', img: 'assets/1.jpg', isFav: true, desc: "The Girl and the Goddess where a girl with a strong will, a full heart, and much to learn. Born into a family reeling from the ruptures of Partition in India, we follow her as she crosses the precarious lines between childhood, teenage discovery, and realizing her adult self."}, 
        { title: 'The Ruins of Gorlan', author: 'John Flanagan', img: 'assets/2.jpg', isFav: false, desc: "The Ruins of Gorlan by John Flanagan is about a boy who starts his journey into manhood in the fantasy world of the Kingdom of Araluen. Will is an orphan who learns about his past and his parents, while coming of age in a kingdom on the verge of war."},
        { title: 'Eagle Strike', author: 'Anthony Horowitz', img: 'assets/3.jpg', isFav: false, desc: "Eagle Strike where a Reluctant MI6 agent Alex Rider is relaxing in the south of France until a sudden, ruthless attack on his hosts plunges him back into a world of violence and mystery - and this time, MI6 don't want to know. Alex is determined to track down his friends' attackers, even if he must do it alone."},
      ],
    }
  },
  methods: { //functions 
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
    Login() { //validation
      if (this.username === "User" && this.password === "password") { //show books page 
        this.showBooks = true;
        this.showLogin = false;
      } 
   },
  },
  computed: { //computing functions 
    filteredBooks() { //get book if book is fav
      return this.books.filter(book => book.isFav)
    }
  }
})

app.mount('#app')
