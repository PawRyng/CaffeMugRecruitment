# CaffeMugRecruitment

| Method | Link                      | Description             | JSON                        |
|--------|---------------------------|-------------------------|-----------------------------|
| GET    | http://localhost:4000/    | Show all products in DB |                             |
| GET    | http://localhost:4000/:id | Show details product    |                             |
| POST   | http://localhost:4000/    | Add product to DB.      | {"Name": "test", "Price":1} |
| PUT    | http://localhost:4000/:id | Edit product.           | "Name": "test", "Price":1}  |
| DELETE | http://localhost:4000/:id | Delete product from DB. |                             |

You can run project:

### `npm start`