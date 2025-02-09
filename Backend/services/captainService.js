const captainModel = require('../Models/captainModel');
const captainController = require('../Controller/captain.controller');

module.exports.registerService = async ({ firstname, lastname, email, password, status, color, plate, capacity, vehicleType }) => {
    if (!firstname || !lastname || !email || !password || !status || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    // Hash the password before saving it to the database
    const hashPassword = await captainModel.hashPassword(password);
    

    try {
        const user = await captainModel.create({
            fullname: {
                firstname: firstname,
                lastname: lastname,
            },
            email: email,
            password: hashPassword,
            status: status,
            vehicle: {
                color: color,
                plate: plate,
                capacity: capacity,
                vehicleType: vehicleType
            }
        });

        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};


