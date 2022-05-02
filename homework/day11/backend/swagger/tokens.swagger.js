/**
 * @openapi
 * /tokens/phone:
 *   post:
 *      summary: 토큰 인증 요청
 *      tags: [tokens]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example:
 *                          phone: "01047384845"
 *      responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: 인증완료!! or 인증실패!!
 */


/**
 * @openapi
 * /tokens/phone:
 *  patch:
 *      summary: 토큰 인증 완료
 *      tags: [tokens]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example:
 *                          phone: "01047384845"
 *                          token: "123456"
 *      responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "true or false"
 */