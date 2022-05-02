/**
 * @swagger
 * /users:
 *   get:
 *      summary: 유저 리스트 가져오기
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  email:
 *                                      type: string
 *                                      example: a@a.com
 *                                  name:
 *                                      type: string
 *                                      example: 송준영
 *                                  phone:
 *                                      type: string
 *                                      example: 01012345678
 *                                  personal:
 *                                      type: string
 *                                      example: 111111-1234567
 *                                  prefer:
 *                                      type: string
 *                                      example: google.com
 *
 *
 */
