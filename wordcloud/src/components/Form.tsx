const Form = () => {
const paragraphs: string[] = [
  "Women in tech often face biases and stereotypes that undermine their abilities.",
  "Lack of mentorship and representation in leadership positions are significant barriers.",
  "The tech industry sometimes fosters a culture that makes women feel unwelcome.",
  "Unequal pay and limited opportunities for career advancement are common issues.",
  "Women frequently encounter imposter syndrome due to the lack of support systems."
];

const fillerWords: string[] = [
  "in", "and", "of", "that", "are", "a", "for", "the", "to", "is", "on", "with", "by", "often"
];

const createWordFrequencyMap = (paragraphs: string[], fillerWords: string[]): Record<string, number> => {
  const wordFrequencyMap: Record<string, number> = {};

  paragraphs.forEach(paragraph => {
    const words = paragraph
      .toLowerCase()
      .replace(/[.,]/g, "") 
      .split(/\s+/); 

    words.forEach(word => {
      if (!fillerWords.includes(word)) {
        wordFrequencyMap[word] = (wordFrequencyMap[word] || 0) + 1;
      }
    });
  });

  return wordFrequencyMap;
};

const wordFrequencyMap = createWordFrequencyMap(paragraphs, fillerWords);

console.log(wordFrequencyMap);

  return (

    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Topic
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>
        <div className="mb-6">

      
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        
        </div>
      </form>

    </div>
  );
};

export default Form;
