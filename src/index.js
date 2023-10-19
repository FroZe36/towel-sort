// You should implement your task here.

module.exports = function towelSort(matrix) {
    const arr = [];
    if (matrix) {
        matrix.forEach((item, i) => {
            if (i % 2 != 0 && i != 0) {
                item.reverse();
            }
            item.map((el) => {
                arr.push(el);
            });
        });
        return arr;
    } else return arr;
};
