
import React from 'react'

import DependentDropdown from 'react-dependent-dropdown'

const App = () => {

  // Fetch from api
  const categories = ['Electronics', 'Clothing', 'Books'];

  // Fetch from api
  const subcategories = {
    Electronics: ['Laptops', 'Smartphones', 'Cameras'],
    Clothing: ['T-shirts', 'Jeans', 'Dresses'],
    Books: ['Fiction', 'Non-fiction', 'Science'],
  };
  
  return <DependentDropdown
    categoriesList={categories}
    subcategoriesData={subcategories}
    categoryClass="custom-category" // Apply custom styles to category dropdown
    subcategoryClass="custom-subcategory" // Apply custom styles to subcategory dropdown
  />
}

export default App;
