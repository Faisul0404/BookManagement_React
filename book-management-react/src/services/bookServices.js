import http from "../http-common";

const getAll = () => {
    return http.get("/getAll");
};

const get = id => {
    return http.get(`/book/${id}`);
};

const create = data => {
    return http.post("/create", data);
};

const update = (id, data) => {
    return http.put(`/update/${id}`, data);
};

const remove = id => {
    return http.delete(`/delete/${id}`);
  };

  const removeAll = () => {
    return http.delete(`/deleteAll`);
  };

  const findByBookname = bookname => {
    return http.get(`/books?bookname=${bookname}`);
  };

  const bookServices = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByBookname
  };
  
  export default bookServices;