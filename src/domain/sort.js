const sortObjectPropertiesOnArray = (objects) => {
    return objects.map(obj => {
        let sortedObj = {};
        Object.keys(obj)
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .forEach(key => {
                sortedObj[key] = obj[key];
            });
        return sortedObj;
    });
}

const removeDuplicates = (objects) => {
    objects = objects.filter((obj, index, self) =>
        index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(obj))
    );
    return objects;
}

const isEmpty = (value) => {
    return value !== 0 && !value
}

const removeEmptyProperties = (entry) => {
    Object.keys(entry).forEach((key) => {
        const property = entry[key];

        if (Array.isArray(property)) {
            if (property.every((val) => isEmpty(val))) {
                delete entry[key]
                return
            }
        } else if (typeof property === 'object') {
            if (isEmpty(property)) {
                delete entry[key]
                return
            }
            let shouldDelete = Object.keys(property).every((_key) => {
                return isEmpty(property[_key])
            })
            if (shouldDelete) {
                delete entry[key]
                return
            }
        } else {
            if (isEmpty(property)) {
                delete entry[key]
            }
        }
    })
    return entry
}

const sort = (entries) => {
    const sorted = sortObjectPropertiesOnArray(entries);
    const normalized = removeDuplicates(sorted);
    return normalized.map((entry) => removeEmptyProperties(entry));
}

module.exports = sort