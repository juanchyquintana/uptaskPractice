import mongoose from "mongoose";

const proyectosSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    descripcion: {
        type: String,
        trim: true,
        required: true,
    },
    fechaEntrega: {
        type: Date,
        default: Date.now(),
    },
    cliente: {
        type: String,
        trim: true,
        required: true,
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tareas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tarea'
        }
    ],
    colaboradores: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, {
    timestamps: true,
});

const Proyecto = mongoose.model('Proyecto', proyectosSchema);
export default Proyecto;