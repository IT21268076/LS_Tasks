/*
* Object projection return projected object
* param @source 
* param @prototype
*/
function projectObject(source, prototype) {
    if (typeof source !== "object" || source === null || typeof prototype !== "object" || prototype === null) {
        throw new Error("Both source and prototype must be non-null objects");
    }

    const result = {};

    for (const key in prototype) {
        if (prototype[key] === null && source.hasOwnProperty(key)) {
            result[key] = source[key];
        } else if (typeof prototype[key] === "object" && typeof source[key] === "object") {
            result[key] = projectObject(source[key], prototype[key]);
        }
    }

    return result;
}

const src = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
};

const proto = {
    prop11: {
        prop22: null
    }
};

const res = projectObject(src, proto);
console.log(res);

