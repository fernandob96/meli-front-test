const express = require("express");
const app = express();
const PORT = 3030;

const cors = require("cors");

app.use(cors());

let author = {
    name: 'Fernando',
    lastname: 'Benavides R'
}

app.get("/api/items", async (req, res) => {
    let categories = [];
    try {
    // Search response with query 'q'
      const resp = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`)
      const searchResponse = await resp.json()
  
    // Categories response (Breadcrumbs)
      const categoriesFetch = await fetch(
        `https://api.mercadolibre.com/categories/${searchResponse.results[0].category_id}`)
  
      const categoriesResponse = await categoriesFetch.json();
  
      categoriesResponse.path_from_root.map((category)=>(
        categories.push(category.name)
      ));
        
      const items = {
        author,
        categories,
        items: searchResponse.results.map((item)=>({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.accepts_mercadopago,
          address: item.address.state_name,
          }))
      }      

      // Json response with statusCode 200 and Content-type: application/json
      res.json(items);
      } catch (err) {
        console.log(err)
        res.status(500).send('Something went wrong')
      }
});

app.get("/api/items/:id", async (req, res) => {
    let categories = [];
    try {
        const resp = await fetch(
        `https://api.mercadolibre.com/items/${req.params.id}`);
        const item = await resp.json();

        const desc = await fetch(
        `https://api.mercadolibre.com/items/${req.params.id}/description`);
        const description = await desc.json();

        // Categories response
        const categoriesFetch = await fetch(
        `https://api.mercadolibre.com/categories/${item.category_id}`)

        const categoriesResponse = await categoriesFetch.json();

        categoriesResponse.path_from_root.map((category)=>(
        categories.push(category.name)
        ));

        const singleProduct  = {
            author,
            categories,
            item: {
                id: item.id,
                title: item.title,
                price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0,
                },
                picture: item.pictures[0].url,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: description.plain_text,
            }
        }

        // Json response with statusCode 200 and Content-type: application/json
        res.json(singleProduct);
    } catch (err) {
        console.log(err)
        res.status(500).send('Something went wrong')
    }
});

app.get('*', function(req, res){
    res.status(404).json({message: "Page not found"});
});

app.listen(PORT, () => {
    console.log("Server  started!!!");
})