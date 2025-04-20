/*
Function for filtering categories based on a search term.
This function takes an array of categories and a search term,
and returns a new array of categories that match the search term.
*/


const filterCategories = (categories, searchTerm) => {
    if (!searchTerm) {
        return categories;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return categories.filter(category => {
        const lowerCaseCategoryName = category.category.toLowerCase();
        return lowerCaseCategoryName.includes(lowerCaseSearchTerm);
    });
}


export default filterCategories;