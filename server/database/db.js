import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.ied4d.mongodb.net/?retryWrites=true&w=majority&appName=eCommerceWeb`
    try{
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        console.log('Database connected successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;