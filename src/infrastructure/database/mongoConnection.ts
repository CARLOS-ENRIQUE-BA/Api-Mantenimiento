import mongoose from 'mongoose';

const connectMongoDB = async (): Promise<void> => {
    const mongoUri = process.env.MONGO_URI as string;
    console.log(`Connecting to MongoDB at URI: ${mongoUri}`);

    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000 
        });

        // Verificar el estado de la conexión
        const connectionState = mongoose.connection.readyState;
        if (connectionState !== 1) {
            throw new Error(`Failed to connect to MongoDB database. Connection state: ${connectionState}`);
        }

        console.log("Connected to MongoDB database");
    } catch (error: any) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

// Evento de error de la conexión
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1); // Salir del proceso en caso de error
});

// Evento de desconexión
mongoose.connection.on('disconnected', () => {
    console.error('MongoDB disconnected');
});

// Evento de conexión exitosa
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

// Evento de reconexión
mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected');
});

export default connectMongoDB;
