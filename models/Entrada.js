const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entradaSchema = new Schema({
  _usuario : {type: Schema.Types.ObjectId, ref:"users"},
  _sesion : {type: Schema.Types.ObjectId, ref:"sesiones"},
  n_entradas : {type : Number},
  butacas : [{ type: Schema.Types.ObjectId, ref: 'reservaButacas' }],
  fecha_compra : {type:Date},
  validada : {type:Boolean, default: false},
});

mongoose.model('entradas',entradaSchema);//Esto es un comando, si existe no lo crea;nombre, esquema
