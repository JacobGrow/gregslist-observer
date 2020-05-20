import _houseService from '../Services/HousesService.js'
import _store from '../store.js';


function _drawHouses() {
  let template = ""
  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HousesController {
  constructor() {
    console.log("Hello from houses controller");
    _store.subscribe('houses', _drawHouses)
  }


  addHouse(event) {
    event.preventDefault();
    let formData = event.target
    let newHousesObj = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      levels: formData.levels.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }
    _houseService.create(newHousesObj)
    formData.reset()
  }

  delete(houseId) {
    _houseService.delete(houseId)
  }

  bid(houseId) {
    _houseService.bid(houseId)
  }
}