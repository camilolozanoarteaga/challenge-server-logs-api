const messageResponse = (message, body) => {
  const bodyMessage = {
    message: message.toUpperCase(),
    body,
  };

  return bodyMessage;
};

const pagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: body } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems, body, totalPages, currentPage,
  };
};

module.exports = { messageResponse, pagination, getPagingData };
