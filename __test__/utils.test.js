const { messageResponse, messageErrorResponse } = require('../utils/utils');

describe('Comprobarque funcionalidad mensaje respuesta request', () => {
  const bodyMessage = {
    message: 'message'.toUpperCase(),
    scheme: '',
  };

  const bodyMessageArray = {
    message: 'message'.toUpperCase(),
    scheme: [],
  };

  const bodyMessageError = {
    message: 'message'.toUpperCase(),
    error: '',
  };

  test('Retorna el valor "message"', () => {
    expect(messageResponse('message', '')).toEqual(bodyMessage);
  });

  test('Retorna un body tipo array', () => {
    expect(messageResponse('message', [])).toEqual(bodyMessageArray);
  });

  test('Retorna el valor "error"', () => {
    expect(messageErrorResponse('message', '')).toEqual(bodyMessageError);
  });
});
