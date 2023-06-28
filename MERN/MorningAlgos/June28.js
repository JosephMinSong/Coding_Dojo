/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.

Given an array of objects that contain a category key,
return a hash table to group the objects by their category.

Make the grouping case-insensitive.

Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Shibe",
      category: "Cute",
    },
    {
      name: "Ancient India",
      category: "Cradle of Civilization",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
    {
      name: "The Fertile Crescent",
      category: "Cradle of Civilization",
    },
  ];
  
  const expected = {
    cute: [
      {
        name: "Baby Yoda",
        category: "cute",
      },
      {
        name: "Shibe",
        category: "Cute",
      },
    ],
    food: [
      {
        name: "Cricket Protein",
        category: "food",
      },
      {
        name: "Wasp Crackers",
        category: "Food",
      },
    ],
    "cradle of civilization": [
      {
        name: "Ancient India",
        category: "Cradle of Civilization",
      },
      {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
      },
    ],
};

/**
   * Creates a hash table of case-insensitive categories mapped to the items
   * belonging to that category.
   * - Time: O(N).
   * - Space: O(?).
   * @param {Array<Object>} items
   * @param {string} items.category
   * @returns {Object<string, Array<Object>>} The hash category hash table with
   *    string keys and array of objects as values.
   */

// O(N) time
// O(N) space --> 1:1 to items
function groupObjects(items) {
    let result = {}

    for (let obj of items){

        let objCategory = obj['category'].toLowerCase()

        if (result.hasOwnProperty(objCategory)){
            result[objCategory].push(obj)
        } else {
            result[objCategory] = []
            result[objCategory].push(obj)
        }
    }

    return result
}

// O(N) time
// O(N) space
function groupObjects2(items, param){
    let result = {}

    let objCategory = param.toLowerCase() 

    result[objCategory] = []

    for (let obj of items){

        let comparedCategory = obj['category'].toLowerCase()

        if (objCategory == comparedCategory){
            result[objCategory].push(obj)
        } 
    }

    return result
}

// console.log(groupObjects2(objects, 'cute'))
// console.log(groupObjects2(objects, 'food'))
// console.log(groupObjects2(objects, 'Cradle of Civilization'))