const { insertNotes, getNotes, updateNotes, deleteNotes } = require("../models/notes-model");

// validasi (kalo data yang diisi gaboleh kosong, kalo kosong error)
const { validateNotes } = require("../utils/validation");

// untuk nampung error message dan status codenya
const ErrorResponse = require("../utils/errorResponse");

// create notes
exports.createData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO notes SET ?";

  // validate
  var errors = validateNotes(data);

  // response errornya menggunakan next untuk di passing ke middleware
  if (errors) {
    return next(new ErrorResponse(errors[0], 400));
  }

  // masukkan ke dalam model
  insertNotes(res, querySql, data, next);
};

// show notess
exports.readData = (req, res, next) => {
  // buat query sql
  const querySql = "SELECT * FROM notes";

  // masukkan ke dalam model
  getNotes(res, querySql, next);
};

// update notes
exports.updateData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySearch = "SELECT * FROM notes WHERE id = ?";
  const queryUpdate = "UPDATE notes SET ? WHERE id = ?";

  // masukkan ke dalam model
  updateNotes(res, querySearch, queryUpdate, req.params.id, data, next);
};

// delete notes
exports.deleteData = (req, res, next) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM notes WHERE id = ?";
  const queryDelete = "DELETE FROM notes WHERE id = ?";

  // masukkan ke dalam model
  deleteNotes(res, querySearch, queryDelete, req.params.id, next);
};