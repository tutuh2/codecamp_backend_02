import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
    findAll() {
        //DB에 접속해서 데이터를 꺼내오는 로직
        return [
            {
                name: '아메리카노',
                price: 1,
                kcal: 1,
                fat: 1,
                protein: 1,
                sodium: 1,
                carb: 1,
                caffeine: 1,
            },
            {
                name: '아메리카노2',
                price: 2,
                kcal: 2,
                fat: 2,
                protein: 2,
                sodium: 2,
                carb: 2,
                caffeine: 2,
            },
            {
                name: '아메리카노3',
                price: 3,
                kcal: 3,
                fat: 3,
                protein: 3,
                sodium: 3,
                carb: 3,
                caffeine: 3,
            },
            {
                name: '아메리카노4',
                price: 4,
                kcal: 4,
                fat: 4,
                protein: 4,
                sodium: 4,
                carb: 4,
                caffeine: 4,
            },
            {
                name: '아메리카노5',
                price: 5,
                kcal: 5,
                fat: 5,
                protein: 5,
                sodium: 5,
                carb: 5,
                caffeine: 5,
            },
        ];
    }

    create() {
        // DB에 데이터를 등록하는 로직

        return '등록에 성공했습니다.';
    }
}
