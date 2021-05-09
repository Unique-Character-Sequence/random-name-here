export const paginator = (pageSize, currentButton, pagesCount) => {
    let borders = []
    let buttons_arr = []
    for (let i = 1; i <= pagesCount; i += 5) {
        borders.push(i)
    }
    for (let i = 0; currentButton >= borders[i]; i++) {
        let left_border = borders[i]
        let right_border = borders[i + 1]
        for (let a = left_border; a <= right_border; a++) {
            buttons_arr.push(a)
        }
    }
    return buttons_arr.filter(((value, index) => buttons_arr.indexOf(value) === index)) // .filter удаляет дубликаты
}

