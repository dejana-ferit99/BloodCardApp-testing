function getById(id) {
    return $(`id=com.example.bloodcardapp:id/${id}`)
}

module.exports = {
    getById
}