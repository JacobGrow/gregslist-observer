export default class House {
  constructor(data) {
    console.log("from the house model");
    this.id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.description = data.description
  }

  get Template() {
    return /*html*/`
    <div class="col-4">
                <div class="card">
                    <img class="card-img-top" src="${this.imgUrl}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">Bedrooms: ${this.bedrooms} | Bathrooms: ${this.bathrooms} </h4>
                        <h5>Levels: ${this.levels}| Price: ${this.price} </h5>
                        <p class="card-text">${this.description}</p>
                        <button class="btn btn-success" onclick="app.carsController.bid('${this.id}')">
                               Bid
                        </button>
                        <button class="btn btn-danger" onclick="app.carsController.delete('${this.id}')">
                               Delete
                        </button>
                    </div>
                </div>
            </div>`
  }
}