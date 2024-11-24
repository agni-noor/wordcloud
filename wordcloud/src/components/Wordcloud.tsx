import React, { useRef } from 'react';
import ReactWordcloud, { CallbacksProp, OptionsProp, Word } from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import words from "../assets/words";
import { select } from 'd3-selection';
import 'd3-transition';

const colors = [
  "#FF6347", "#FF4500", "#FFD700", "#32CD32", "#1E90FF",
  "#9932CC", "#FF1493", "#00BFFF", "#DC143C", "#8A2BE2",
  "#FF69B4", "#8B4513"
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Wordcloud: React.FC = () => {
  const previousWordRef = useRef<HTMLElement | null>(null);

  const handleWordClick = (word: Word, event: MouseEvent | undefined) => {
    if (!event) return;
    
    const clickedElement = event.target as HTMLElement;
    
    // If clicking the same word again, reset it
    if (previousWordRef.current === clickedElement) {
      select(clickedElement)
        .transition()
        .duration(300)
        .style('font-size', function() {
          const currentSize = select(this).style('font-size');
          const sizeValue = parseFloat(currentSize);
          return `${sizeValue / 1.5}px`;
        });
      previousWordRef.current = null;
      return;
    }

    // Reset previous word if exists
    if (previousWordRef.current) {
      select(previousWordRef.current)
        .transition()
        .duration(300)
        .style('font-size', function() {
          const currentSize = select(this).style('font-size');
          const sizeValue = parseFloat(currentSize);
          return `${sizeValue / 1.5}px`;
        });
    }

    // Enlarge clicked word
    select(clickedElement)
      .transition()
      .duration(300)
      .style('font-size', function() {
        const currentSize = select(this).style('font-size');
        const sizeValue = parseFloat(currentSize);
        return `${sizeValue * 1.5}px`;
      });

    previousWordRef.current = clickedElement;
  };

  const callbacks: CallbacksProp = {
    getWordColor: (word: Word) => getRandomColor(),
    onWordClick: handleWordClick,
    onWordMouseOver: undefined,
    getWordTooltip: undefined,
  };

  const options: OptionsProp = {
    rotations: 2,
    rotationAngles: [0, 90],
    colors: colors,
    enableTooltip: false,
    deterministic: true,
    fontFamily: 'impact',
    fontSizes: [20, 60],
    padding: 3,
  };

  const size: [number, number] = [600, 400];

  return (
    <div className="h-screen flex justify-center items-center">
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={words}
      />
    </div>
  );
};

export default Wordcloud;