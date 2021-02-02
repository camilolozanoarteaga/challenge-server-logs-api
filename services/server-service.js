const { messageResponse, pagination, getPagingData } = require('../utils/utils');
const { getAllServersData, getServerByIdData } = require('../data/server-data');

const getAllServersSevice = async (req, res, next) => {
  try {
    const { page, size } = req.query;
    const { limit, offset } = pagination(page, size);
    const data = await getAllServersData(limit, offset);

    res.json(
      messageResponse(
        'Información cargada exitosamente',
        getPagingData(data, page, limit),
      ),
    );
  } catch (error) {
    next(error);
  }
};

const getServerByIdService = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await getServerByIdData(id);

    res.json(messageResponse('Información cargada exitosamente', data));
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllServersSevice, getServerByIdService };
