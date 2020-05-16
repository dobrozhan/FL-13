const library = [
  'The Lord of the Rings',
  'Harry Potter and the Philosopher\'s Stone',
  'The Master and Margarita'
];

const informationAboutBook = [{
    book: `${library[0]}`,
    author: 'J.R.R. Tolkien',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg',
    plot: `The future of civilization rests in the fate of the One Ring, which has been lost for centuries. 
  Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit 
  named Frodo Baggins (Elijah Wood), 
  who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - 
  to destroy the One Ring in the fires of Mount Doom where it was forged.`
  },
  {
    book: `${library[1]}`,
    author: 'J.K. Rowling',
    image: 'https://m.media-amazon.com/images/I/51UoqRAxwEL._SY346_.jpg',
    plot: `Adaptation of the first of J.K. Rowling's popular children's 
  novels about Harry Potter, 
  a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards 
  and possesses unique magical powers of his own. 
  He is summoned from his life as an unwanted child to become a student at Hogwarts, 
  an English boarding school for wizards. 
  There, he meets several friends who become his closest allies and help 
  him discover the truth about his parents' mysterious deaths.`
  },
  {
    book: `${library[2]}`,
    author: 'Mikhail Bulgakov',
    image: 'https://i.pinimg.com/564x/5d/8f/57/5d8f573198ce3f31492a282e43a0637c.jpg',
    plot: `The Master and Margarita is a darkly comedic takedown of Soviet society, 
  an audacious revision of the stories of Faust and Pontius Pilate, and a thrilling love story. 
  The novel begins with the Devil's arrival in 1930's Moscow disguised as the distinguished Professor Woland.`
  }
]

localStorage.setItem('library', JSON.stringify(library));
localStorage.setItem('informationAboutBook', JSON.stringify(informationAboutBook));
