function solution(name, yearning, photo) {
    return photo.map((picture) => {
        let score = 0;
        picture.map((friend) => {
            score += name.indexOf(friend) !== -1 ? yearning[name.indexOf(friend)] : 0;
        })
        return score;
    })
}