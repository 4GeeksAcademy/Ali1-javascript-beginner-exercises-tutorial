function sing() {
    const verses = [
      "Twinkle, twinkle, little star,",
      "How I wonder what you are!",
      "Up above the world so high,",
      "Like a diamond in the sky.",
      "Twinkle, twinkle, little star,",
      "How I wonder what you are!"
    ];
  
    let lyrics = '';
    for (let i = 0; i < verses.length; i++) {
      lyrics += verses[i] + '\n';
    }
  
    return lyrics.trim();
  }
  
  // Mocking console.log to capture its calls for testing purposes
  console.log = jest.fn();
  
  const songLyrics = sing();
  console.log(songLyrics);
  
  expect(console.log.mock.calls.length).toBe(1);
  expect(console.log).toHaveBeenCalledWith(songLyrics);