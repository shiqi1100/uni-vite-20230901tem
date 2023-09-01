export const resetReactive = (val) => {
    const keys = Object.keys(val);
    let obj = {};
    keys.forEach((item) => {
        obj[item] = "";
    });
    Object.assign(val, obj);
};
