const { nanoid } = require("nanoid");
const { notes } = require("./notes");
const addHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: "success",
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: "failed",
    message: "Catatan Tidak Ditemukan",
  });
  response.code(404);
  return response;
};

const getHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);
  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        noteId: id,
      },
    });
    response.header("Access-Control-Allow-Origin", "*");
    response.code(201);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Catatan gagal ditambahkan",
  });
  response.header("Access-Control-Allow-Origin", "*");
  response.code(500);
  return response;
};

const getIdHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

const updateHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: "success",
      message: "Successfully Updated",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "failed",
    message: "Failed To update the data. Id not found",
  });
  response.code(404);
  return response;
};

const deleteHandler = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Note Successfully Deleted",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "Failed",
    message: "Note Failed Deleted. Id not found",
  });
  response.code(404);
  return response;
};
module.exports = {
  addHandler,
  getHandler,
  getIdHandler,
  updateHandler,
  deleteHandler,
};
