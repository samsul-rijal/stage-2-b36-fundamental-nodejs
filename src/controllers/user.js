// Create db variable and get database connection here ...
// Get QueryTypes from sequelize

const db = require("../database/connection")
const { QueryTypes } = require("sequelize")

// Create controller add User here ...
exports.addUser = async (req, res) => {
    try {
        
        const {name, email, password, status} = req.body

        const query = `INSERT INTO users (name, email, password, status) VALUES ('${name}','${email}','${password}', '${status}')`

        await db.sequelize.query(query)

        res.send({
            status: "success",
            message: "Add user success",
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "server error"
        })
    }
}


// Create controller get Users here ...

// Create controller get User by received id here ...

// Create controller update User here ...

// Create controller delete User here ...
