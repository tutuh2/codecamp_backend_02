/**
 * @openapi
 * /starbucks:
 *   get:
 *      summary: 커피 메뉴 리스트 가져오기
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  number:
 *                                      type: int
 *                                      example: 2
 *                                  writer:
 *                                      type: string
 *                                      example: 철수
 *                                  title:
 *                                      type: string
 *                                      example: 제목입니다~~~
 *                                  contents:                            
 *                                      type: string
 *                                      example: 내용입니다!!!
 * 
 */