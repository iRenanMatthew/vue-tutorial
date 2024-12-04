const app = Vue.createApp({
  // Data, Functions
  template: "",

  data() {
    return {
      url: "https://github.com/iRenanMatthew",
      showBooks: true,
      books: [
        {
          isFav: true,
          title: "Atomic Habits",
          author: "James Clear",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBffIADb9lo-PH5ZGy2lkWGbOvg-EzyFt9xA&s",
        },
        {
          isFav: false,
          title: "48 Laws of Power",
          author: "Robert Greene",
          imgSrc:
            "https://m.media-amazon.com/images/I/611X8GI7hpL._SL1500_.jpg",
        },
        {
          isFav: false,
          title: "Ego is the Enemy",
          author: "Ryan Holiday",
          imgSrc:
            "https://m.media-amazon.com/images/I/61JX7ogmaVL._SL1393_.jpg",
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle() {
      this.title = "What";
    },

    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavorite(item) {
      item.isFav = !item.isFav;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouse(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav === true);
    },
  },
});

app.mount("#app");
