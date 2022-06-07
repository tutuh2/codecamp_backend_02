/**
 * @openapi
 * /users:
 *   get:
 *      summary: 유저정보 가져오기
 *      tags: [users]
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  og:
 *                                      type: object
 *                                      properties:
 *                                          title:
 *                                              type: string
 *                                              example: 네이버
 *                                          image:
 *                                              type: string
 *                                              example: "https://asdfqvqwef.png"
 *                                          description:
 *                                              type: string
 *                                              example: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"
 *                                  _id:
 *                                      type: string
 *                                      example: 712341324dfewfdf125136
 *                                  name:
 *                                      type: string
 *                                      example: 강백호
 *                                  email:
 *                                      type: string
 *                                      example: a@a.com
 *                                  personal:
 *                                      type: string
 *                                      example: 9201230-*******
 *                                  prefer:                            
 *                                      type: string
 *                                      example: https://naver.com
 *                                  pwd:
 *                                      type: string
 *                                      example: asdf1234
 *                                  __v:
 *                                      type: number
 *                                      example: 0
 * 
 */


/**
 * @openapi
 * /users:
 *  post:
 *      summary: 회원가입 완료
 *      tags: [users]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example:
 *                          name: "송준영"
 *                          email: "tutuh@naver.com"
 *                          personal: "920807-1234567"
 *                          prefer: "https://naver.com"
 *                          pwd: "asdf1234"
 *                          phone: "01047384845"
 *      responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: 624039b82179eff40963ddba
 *          422:
 *              description: fail
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: 에러!! 핸드폰 번호가 인증되지 않았습니다
 */