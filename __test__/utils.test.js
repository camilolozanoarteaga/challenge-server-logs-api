const { messageResponse } = require('../utils/utils');

describe('Comprobarque funcionalidad mensaje respuesta request', () => {
  const bodyMessage = {
    message: 'message'.toUpperCase(),
    body: '',
  };

  const bodyMessageArray = {
    message: 'message'.toUpperCase(),
    body: [],
  };

  test('Retorna el valor \'message\'', () => {
    expect(messageResponse('message', '')).toEqual(bodyMessage);
  });

  test('Retorna un body tipo array', () => {
    expect(messageResponse('message', [])).toEqual(bodyMessageArray);
  });
});
