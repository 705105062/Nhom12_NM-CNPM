import { defineStore } from "pinia";
import { list } from "postcss";

const list_data = [
    {
        "index": 0,
        "image": "../assets/game1/img4.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img4.PNG",
        "status": 1,
    },
    {
        "index": 1,
        "image": "../assets/game1/img5.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img5.PNG",
        "status": 1,
    },
    {
        "index": 2,
        "image": "../assets/game1/img6.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img6.PNG",
        "status": 1,
    },
    {
        "index": 3,
        "image": "../assets/game1/img7.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img7.PNG",
        "status": 1,
    },
    {
        "index": 4,
        "image": "../assets/game1/img8.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img8.PNG",
        "status": 1,
    },
    {
        "index": 5,
        "image": "../assets/game1/img9.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img9.PNG",
        "status": 1,
    },
    {
        "index": 6,
        "image": "../assets/game1/img10.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img10.PNG",
        "status": 1,
    },
    {
        "index": 7,
        "image": "../assets/game1/img11.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img11.PNG",
        "status": 1,
    },
    {
        "index": 8,
        "image": "../assets/game1/img12.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img12.PNG",
        "status": 1,
    },
    {
        "index": 9,
        "image": "../assets/game1/img13.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img13.PNG",
        "status": 1,
    },
    {
        "index": 10,
        "image": "../assets/game1/img14.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img14.PNG",
        "status": 1,
    },
    {
        "index": 11,
        "image": "../assets/game1/img15.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img15.PNG",
        "status": 1,
    },
];

let x = 0;

let list2 = JSON.parse(JSON.stringify(list_data));

let double_list = list_data.concat(list2);

let list_data_last = double_list.sort(func);
list_data_last.map((state) => {
    state.id = x;
    x++;
})

function func() {
    return 0.5 - Math.random();
}

export const ImgStore = defineStore({
    id: 'img',
    state: () => ({
        click_2: false,              // lần click thứ 2
        list: list_data_last,       // danh sách img
        is_check_index: -1,             // index của ảnh khi được click
        last_index_check: -1,           // index sau khi click lần 1
        last_id: -1,                // id sau khi click lần 1
        total_score: 0,                 // tổng điểm đạt được = điểm +  (thời gian còn lại)*100 + (1/số lần click) * 1000
        start_game: false,                // trạng thái bắt đầu của game (true là bắt đầu, false là đang đợi)
        game_status: 0,             // trạng thái game khi đang chơi (0 là đang chơi, 1 là tạm dừng, 2 là kết thúc)
        time_play: 3,                  // thời gian giới hạn một lượt chơi 
        pass_img: 0,                // số ảnh đã hoàn thành
        score: 0,                   // điểm số nhận được mỗi khi hoàn thành 1 cặp ảnh
        number_of_click: 0,         // tổng số lần click
        
    }),
    actions: {
        clickImg(a) {
            if (this.list[a].status != 3) {
                this.check_time_click(a);
            }

        },
        getImageUrl(link) {
            return new URL(`../../src/assets/${link}`, import.meta.url).href
        },

        // a là id của ảnh được click
        check_time_click(a) {
            this.is_check_index = this.list[a].index;
            this.number_of_click ++;
            if(!this.click_2) {
                this.last_id = a;
                this.click_to_img(a, 2);
                this.last_index_check = this.list[a].index;
                this.click_2 = true;
            } else {
                if(this.list[a].status == 1) {
                    this.click_to_img(a, 2);
                    if(this.is_check_index == this.last_index_check) {
                        this.time_open_img(a, 3);
                        this.time_open_img(this.last_id, 3);
                        this.pass_img ++;
                        this.score += 100;
                    } else {
                        this.time_open_img(a, 1);
                        this.time_open_img(this.last_id, 1);
                    }
                } else {
                    
                    this.time_open_img(a, 1);
                }
                this.click_2 = false;
            }
        },

        // funciton click ảnh, x là id, y là trạng thái mong muốn của ảnh (1 là đang đóng, 2 là mở, 3 là hoàn thành)
        click_to_img(x, y) {
            this.list[x].status = y;
        },
        // đặt thời gian để mở ảnh
        time_open_img(x, y) {
            setTimeout(() => {
                this.click_to_img(x, y);
            }, 1000);
        },
        on_start_game() {
            this.start_game = true;
            this.game_status = 0;
            window.setInterval(() => {
                if(this.game_status == 0 && this.time_play > 0 && this.pass_img < 12) {
                    this.time_play --;
                }
                if(this.pass_img == 12 || this.time_play <= 0) {
                    this.game_status = 2;
                    if(this.game_status != 0) {
                        this.total_score = this.score + this.time_play * 100 + (1 / this.number_of_click) * 1000;
                    }
                }
            }, 1000);
        },

        // click start để chơi game
        click_start() {
            // this.on_start_game();
        },

        // click pause
        click_pause() {
            this.game_status = 1;
        },
        // click resume để tiếp tục game
        click_resume() {
            this.game_status = 0;
        },
        // click reset để làm mới game
        click_reset() {
            window.location.reload();
        },

        // click new game
        click_new_game() {
            this.game_status = 0;
            window.location.reload();
        },
        click_exit() {
            window.location.reload();
        }
    }
})