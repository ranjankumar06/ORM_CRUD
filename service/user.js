const Users = require('../model/user');

module.exports = class UserService {
    async create(details) {
        const dataa = await Users.query().where('email', details.email)
        if (!dataa[0]) {
            return await Users.query().insert(details);

        }
        return ({ 'email': 'already use' })
    }





    async update(details, id) {


        const updateUsers = await Users.query()
            .where("id", id)
            .update({
                name: details.name,
                email: details.email,
                password: details.password

            });
        console.log(updateUsers);
        return await updateUsers
    }


    async deleteById(wedelete) {
        const ip = await Users.query().deleteById(wedelete)
            if(ip==0){
                return({"sorry":"user is not found"})
            }
            return({"ip":"successfully deleted"})
    }
}

