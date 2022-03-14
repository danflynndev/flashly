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
