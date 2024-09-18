import React from 'react';
import ReviewCard from './Review'; // Assuming the ReviewCard component is in the same folder
import Review_card from '../../api/Review'; // Importing data from your API mock

const App = () => {
    console.log(Review_card);
  return (
    <div className="container d-flex flex-row  mt-5">
     
      {

        Review_card.map((item) => {
          return (
            <ReviewCard 
              key={item.id} // Use the unique ID of the item for the key
              reviewerName={item.reviewerName} // Ensure these match the props expected in ReviewCard
              reviewDate={item.reviewDate} 
              reviewText={item.reviewText} 
             
            />
          );
        })
      }
    </div>
  );
};

export default App;
