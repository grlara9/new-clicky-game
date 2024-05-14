import React, { useState, useEffect } from 'react';

const ImageGame = () => {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  const apikey = 'yBAZjoiR1yTjpA2V4xeh-2j25VkVUyALhu7IPCLBYL8'

  console.log(images)
  useEffect(() => {
    // Fetch images data from JSON file on component mount
    fetchImages();
  }, []);

  
  const fetchImages = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=stadium&count=12&client_id=${apikey}`)
      
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

     // Adjust path based on your file location
      const result = await response.json();
      setImages(result);
    } catch (error) {
      console.error('Error fetching images: ', error);
    }
  };

  const handleClick = (id) => {
    if (clickedIds.includes(id)) {
      // Reset game if same image is clicked again
      resetGame();
    } else {
      // Increment score and check for top score
      const newScore = score + 1;
      setScore(newScore);
      setTopScore(Math.max(newScore, topScore));

      // Add clicked image ID to clickedIds
      setClickedIds([...clickedIds, id]);

      // Shuffle images for next round
      shuffleImages();
    }
  };

  const resetGame = () => {
    setScore(0);
    setClickedIds([]);
  };

  const shuffleImages = () => {
    // Create a shuffled copy of images array
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  };

  return (
    <div>
      <h1>Clicky Game</h1>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={image.id} // Generate a unique key for each image
            src={image.urls.small}
            alt={image.urls.regular}
            onClick={() => handleClick(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGame;