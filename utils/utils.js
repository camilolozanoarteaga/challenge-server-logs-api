const messageResponse = (message, body) => {
  const bodyMessage = {
    message: message.toUpperCase(),
    scheme: body,
  };

  return bodyMessage;
};

const messageErrorResponse = (message, body) => {
  const bodyMessage = {
    message: message.toUpperCase(),
    error: body,
  };

  return bodyMessage;
};

const pagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    items,
    totalPages,
    currentPage,
  };
};

module.exports = {
  messageResponse,
  messageErrorResponse,
  pagination,
  getPagingData,
};
