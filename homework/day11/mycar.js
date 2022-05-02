class MyCar {
    type = "BMW M5";
    HP = 600;
    color = "Red";
    fuel = "Gasolin";

    start = () => {
        console.log("부르릉!!")
    }

    stop = () => {
        console.log("끼이이이익!!")
    }

    drift = () => {
        console.log("이게 바로 관성드리프트다!!!")
    }

}

const myCar = new MyCar();

myCar.start();
myCar.stop();
myCar.drift();