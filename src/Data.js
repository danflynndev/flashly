const data = JSON.parse(JSON.stringify(
    {
        "categories": [
            {
                "categoryName": "Array Methods",
                "cards": [
                    {
                        "title": "pop()",
                        "effect": "Removes last item. Mutates array.",
                        "return": "Value of removed item."
                    },
                    {
                        "title": "filter()",
                        "args": "(callbackFn, thisArg)",
                        "return": "New array with elements that return truthy inside callbackFn"
                    },
                    {
                        "title": "findIndex()",
                        "args": "(callbackFn, thisArg)",
                        "return": "Index of the first element in the array that passes test in callback",
                        "factoid": "there is also a find() method"
                    },
                    {
                        "title": "every()",
                        "args": "(callbackFn, thisArg)",
                        "return": "true if the callback returns truthy for every array element. Otherwise, false."
                    }
                ]
            },
            {
                "categoryName": "String Methods",
                "cards": [
                    {
                        "title": "substring",
                        "args": "indexStart, indexEnd",
                        "return": "New string containing the specified part of the given string."
                    }
                ]
            }
        ]
    }
));

export const categories = data.categories;
