# React Dependent Dropdown

> A library of custom dependent dropdown with custom styles in React applications.

[![NPM](https://img.shields.io/npm/v/react-dependent-dropdown.svg)](https://www.npmjs.com/package/react-dependent-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Downloads](https://img.shields.io/npm/dt/react-dependent-dropdown.svg)](https://www.npmjs.com/package/react-dependent-dropdown)

## Install

```bash
npm install --save react-dependent-dropdown
```

## Usage

```jsx
import React, { Component } from 'react'

import DependentDropdown from 'react-dependent-dropdown'

class Example extends Component {
  render() {
    // Fetch from api
    const categories = ['Electronics', 'Clothing', 'Books']

    // Fetch from api
    const subcategories = {
      Electronics: ['Laptops', 'Smartphones', 'Cameras'],
      Clothing: ['T-shirts', 'Jeans', 'Dresses'],
      Books: ['Fiction', 'Non-fiction', 'Science']
    }
    
    return (
      <DependentDropdown
        categoriesList={categories}
        subcategoriesData={subcategories}
        categoryClass='custom-category' // Apply custom styles to category dropdown
        subcategoryClass='custom-subcategory' // Apply custom styles to subcategory dropdown
      />
    )
  }
}
```

## License

MIT © [remonhasan](https://github.com/remonhasan)
