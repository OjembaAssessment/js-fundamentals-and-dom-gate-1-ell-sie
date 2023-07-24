const paragraph = document.querySelector('#myParagraph')
const words = paragraph.textContent.split(' ');


const occuringWords = {};
words.forEach(word => {
    occuringWords[word] = (occuringWords[word] || 0) + 1;
  });

//Find the most frequent words (up to 5 in this case)
const sortedWords = Object.keys(occuringWords).sort((a, b) => occuringWords[b] - occuringWords[a]);
const maxFrequency = occuringWords[sortedWords[4]]; // 5th most occurring word's frequency
const mostOftenWords = sortedWords.filter(word => occuringWords[word] >= maxFrequency).slice(0, 5);


const startsWithCapital = word => /^[A-Z]/.test(word);

//highlighting the 5 most often occuring words., if one of the words marked starts with a capital letter, underline it
const highlightedParagraph = words
  .map(word => {
    const isMostFrequent = mostOftenWords.includes(word);
    const shouldUnderline = startsWithCapital(word);

    if (isMostFrequent) {
      if (shouldUnderline) {
        return `<span style="background-color: pink; text-decoration: underline;">${word}</span>`;
      }
      return `<span style="background-color: pink;">${word}</span>`;
    }

    return word;
  })
  .join(' ');

// Replacing the original paragraph content with the highlighted version
paragraph.innerHTML = highlightedParagraph;