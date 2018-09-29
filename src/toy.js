let toyArray = []

class Toy {
  constructor(toyObj) {
    this.id = toyObj.id
    this.name = toyObj.name
    this.image = toyObj.image
    this.likes = toyObj.likes
    toyArray.push(this)
  }

  updateToy(newToyDets) {
    this.id = newToyDets.id
    this.name = newToyDets.name
    this.image = newToyDets.image

  }


  static findById(givenId) {
    return toyArray.find(function(toy){
      return Toy.toyObj.id == givenId
    })

  }
}
