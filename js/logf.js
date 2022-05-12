function bu_or_sal () {
    try {
        if(confirm("Можете покупать, или продавать акции на бала")) {
            if(confirm("Покупа")) {
                if(confirm("Прежде чем покупать, надо зарегетсриро, или войт")) {
                    var use_us1 = {
                        use_i1: {
                            us1_nm1:"igo",
                            us1_sr1:"romane",
                            us1_ag1:"37"
                        }
                    };
                    if(use_us1.hasOwnProperty("use_i1.us1_nm1") && use_us1.use_i1.us1_nm1 == "igo") {
                        if(confirm("Чтбы войти, вам понадобиться ввести свои данн")) {
                            var use_unm_1;
                            var use_usr_1;
                            var use_uag_1;
                            if(confirm("Введите своё им")) {
                                use_unm_1 = prompt("Введите своё им");
                                use_usr_1 = prompt("Введите свою фамил");
                                if(use_unm_1 != use_us1.use_i1.us1_nm1 && use_usr_1 != use_us1.use_i1.us1_sr1) throw new Error("У вас ошикба, поле не может быть пуст");
                                else if(use_unm_1 == use_us1.use_i1.us1_nm1 && use_usr_1 == use_us1.use_i1.us1_sr1) {
                                    if(confirm("Вы почти прошли проверку, отсалось вести ваш возр")) {
                                        use_uag_1 = prompt("Введите свой возр");
                                        if(use_uag_1 != use_us1.use_i1.us1_ag1 && use_us1.hasOwnProperty("use_i1.us1_nm1") == true) throw new Error("У вас ошибка, поле не может быть пус");
                                        else if(use_uag_1 == use_us1.use_i1.us1_ag1 && use_us1.hasOwnProperty("use_i1.us1_sr1") == true) {
                                            if(confirm("Вы вошли, теперь можете посмотреть свой проф")) {

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if(confirm("Прода")) {
                    if(confirm("Прежде чем продав, надо зарегетсриро, или войт")) {
                    }
                }
            }
        }
    }
    catch(e) {
        if(confirm("У вас ошибка, вы не были зарегестриро")) {
            if(confirm("Можете прямо сейчас продолжи")) {
                if(confirm("Если у вас есть какая-то ошибка, можете прямо сейчас помо")) {
                    
                } else {
                    if(confirm("Всё хорош, тогда мы добавим вас на бала")) {
                        Object.defineProperty(use_us1, "use_unm_2", {value:use_unm_1, writable:true, enumerable:true, configurable:true});
                        if(use_us1.hasOwnProperty("use_unm_2") == true && use_us1.use_unm_2 == use_unm_1) {
                            Object.defineProperty(use_us1, "use_usr_2", {value:use_usr_1, writable:true, enumerable:true, configurable:true});
                            if(use_us1.hasOwnProperty("use_usr_2") == true && use_us1.use_usr_2 == use_usr_1) {
                                Object.defineProperty(use_us1, "use_uag_2", {value:use_uag_1, writable:true, enumerable:true, configurable:true});
                                if(use_us1.hasOwnProperty("use_uag_2") == true && use_us1.use_uag_2 == use_uag_1) {
                                    if(confirm("Посмотеть ваш балан")) {
                                        var us_pri1 = {
                                            us_1_mon:"1350"
                                        };
                                        if(us_pri1.hasOwnProperty("us_1_mon") == true && "1350" == us_pri1.us_1_mon) {
                                            if(confirm("Ваш балан" + " " + us_pri1.us_1_mon)) {
                                                if(confirm("Посмотреть цену акц")) {
                                                    
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}