const database = [
  {id: 1, productId: 1, name: 'yukito_ohira', content: 'レビュー1'},
  {id: 2, productId: 1, name: 'hoge', content: 'レビュー2'},
  {id: 3, productId: 2, name: 'fuga', content: 'レビュー3'},
]

export default {
  fetch(id) {
    return database
  },
  find(id) {
    return database.find(el => el.id === id)
  },
  fetchByProductId(id) {
    return database.filter(el => el.productId === id)
  },
  asyncFetchByProductId(id, callback) {
    setTimeout(() => {
      callback(fetchByProductId(id))
    }, 1000)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}
