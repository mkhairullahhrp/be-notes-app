import koneksi from "../config/database.js";
import { responseData, responseMessage } from "../utils/response-handler.js";
import ErrorResponse from "../utils/errorResponse.js";

// insert notes
const insertNotes = (response, statement, data, next) => {
  // jalankan query
  koneksi.query(statement, data, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika request berhasil
    responseMessage(response, 201, "Berhasil insert data!");
  });
};

// get data notes
const getNotes = (response, statement, next) => {
  // jalankan query
  koneksi.query(statement, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika request berhasil
    responseData(response, 200, rows);
  });
};

// update data notes
const updateNotes = (response, searchStatement, updateStatement, id, data, next) => {
  // jalankan query untuk melakukan pencarian data
  koneksi.query(searchStatement, id, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query update
      koneksi.query(updateStatement, [data, id], (err, rows, field) => {
        // error handling
        if (err) {
          return next(new ErrorResponse(err.message, 500));
        }

        // jika update berhasil
        responseMessage(response, 200, "Berhasil update data!");
      });
    } else {
      return response.status(404).json({ message: "Data tidak ditemukan!", success: false });
    }
  });
};

// delete notes
const deleteNotes = (response, searchStatement, deleteStatement, id, next) => {
  // jalankan query untuk melakukan pencarian data
  koneksi.query(searchStatement, id, (err, rows, field) => {
    // error handling
    if (err) {
      return response.status(500).json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query delete
      koneksi.query(deleteStatement, id, (err, rows, field) => {
        // error handling
        if (err) {
          return next(new ErrorResponse(err.message, 500));
        }

        // jika delete berhasil
        responseMessage(response, 200, "Berhasil hapus data!");
      });
    } else {
      return response.status(404).json({ success: false, message: "Data tidak ditemukan!" });
    }
  });
};

export { insertNotes, getNotes, updateNotes, deleteNotes };
