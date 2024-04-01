import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-20 py-20">
      <div className="grid grid-cols-3 gap-4">
        {/* Example grid items */}
        <div className="bg-blue-200 p-4">
            <h2>iPhone</h2>
            <img 
            width={330}
            height={308}
            src='https://banner2.cleanpng.com/20180723/yyj/kisspng-iphone-3gs-apple-iphone-8-plus-iphone-4s-1-png-5b556e0a6732a9.0996365115323253864227.jpg'/>
        </div>
        <div className="bg-green-200 p-4">
            <h2>iPhone 3G</h2>
            <img />
        </div>
        <div className="bg-yellow-200 p-4">Grid Item 3</div>
        {/* Add more grid items as needed */}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {/* Example grid items */}
        <div className="bg-blue-200 p-4">Grid Item 1</div>
        <div className="bg-green-200 p-4">Grid Item 2</div>
        <div className="bg-yellow-200 p-4">Grid Item 3</div>
        {/* Add more grid items as needed */}
      </div>
    </div>
  );
}

export default Home;
