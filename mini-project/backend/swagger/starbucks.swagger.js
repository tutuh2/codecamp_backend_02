/**
 * @openapi
 * /starbucks:
 *   get:
 *      summary: 커피 메뉴 스크래핑해오기
 *      tags: [starbucks]
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      example: 624059e41be2ea0ce5d1f0a0
 *                                  name:
 *                                      type: string
 *                                      example: 나이트로 바닐라 크림
 *                                  img:
 *                                      type: string
 *                                      example: https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg
 *                                  __v:
 *                                      type: number
 *                                      example: 0
 */