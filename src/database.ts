import mongoose from 'mongoose';
export async function connect() {
  try {
    mongoose.connect('mongodb://localhost/ts-app-books', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('DB connected');
  } catch {
    console.log('Error Mongodb');
  }
}

export default connect;
