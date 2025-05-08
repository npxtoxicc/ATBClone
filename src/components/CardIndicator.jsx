const CardIndicator = ({ totalCards, currentIndex, setCurrentIndex }) => {
  return (
    <div className="flex items-center justify-center mt-2 mb-4">
      {Array.from({ length: totalCards }).map((_, index) => (
        <button
          key={index}
          className={`card-indicator ${currentIndex === index ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};

export default CardIndicator;