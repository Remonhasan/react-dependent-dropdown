import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DependentDropdown = ({ categoriesList, subcategoriesData, categoryClass, subcategoryClass }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        if (selectedCategory) {
            setSubcategories(subcategoriesData[selectedCategory] || []);
            setSelectedSubcategory('');
        }
    }, [selectedCategory, subcategoriesData]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
    };

    const handleSubcategoryChange = (e) => {
        setSelectedSubcategory(e.target.value);
    };

    return (
        <div className="dropdown-container">
            <div className={`dropdown ${categoryClass}`}>
                <label className="dropdown-label">
                    Category :
                    <select
                        className={`dropdown-select ${categoryClass}`}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select a category</option>
                        {categoriesList.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className={`dropdown ${subcategoryClass}`}>
                <label className="dropdown-label">
                    Subcategory :
                    <select
                        className={`dropdown-select ${subcategoryClass}`}
                        value={selectedSubcategory}
                        onChange={handleSubcategoryChange}
                    >
                        <option value="">Select a subcategory</option>
                        {subcategories.map((subcategory, index) => (
                            <option key={index} value={subcategory}>
                                {subcategory}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
};

DependentDropdown.propTypes = {
    categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired,
    subcategoriesData: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    categoryClass: PropTypes.string, // Class name for category dropdown
    subcategoryClass: PropTypes.string, // Class name for subcategory dropdown
};

DependentDropdown.defaultProps = {
    categoryClass: '', // Default: no custom class
    subcategoryClass: '', // Default: no custom class
};

export default DependentDropdown;
