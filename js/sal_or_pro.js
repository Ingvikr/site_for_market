function sal_or_sol () {
    try {
        var pass_comma1 = {
            comm_1:"124a",
            comm_2:"123a",
            comm_3:"121a",
            comm_4:"129a",
            comm_5:"121a"
        };
        if(pass_comma1.hasOwnProperty("comm_1") == true && pass_comma1.hasOwnProperty("comm_4") == true) {
            if(confirm("Введите ваш пар")) {
                if(confirm("Введите пароль, и сможете посмотреть ваш бала")) {
                    var pass_comma2 = {
                        comm_psw1: {
                            pas_com1:"1345"
                        },
                        comm_psw2: {
                            pas_com2:"1335"
                        },
                        comm_psw3: {
                            pas_com3:"1315"
                        },
                        comm_psw4: {
                            pas_com4:"1245"
                        },
                        comm_psw5: {
                            pas_com5:"1545"
                        }
                    };
                    if(pass_comma2.hasOwnProperty("comm_psw1.pas_com1") == true && pass_comma2.comm_psw1.pas_com1 == "1345") {
                        var ps_cpm1;
                        ps_cpm1 = prompt("Введите ваш паро");
                        if(ps_cpm1 != pass_comma1.comm_2 && ps_cpm1 == pass_comma1.comm_1) {
                            if(confirm("Ваш балан" + " " + pass_comma2.comm_psw1.pas_com1 + "$")) {
                                if(confirm("Можете посмотерть список акц")) {
                                    if(confirm("Посмотреть список акци")) {
                                        var ds_sta1 = {
                                            app_1:"134",
                                            ama_1:"124",
                                            oll_1:"114",
                                            pos_1:"154",
                                            sam_1:"164"
                                        };
                                        if(ds_sta1.hasOwnProperty("app_1") == true && ds_sta1.hasOwnProperty("ama_1")) {
                                            for(i in ds_sta1) {
                                                alert("sal" + ds_sta1 + " = " + ds_sta1[i]);
                                            }
                                            if(confirm("Можете написать название акции, которую хотите преобретс")) {
                                                if(confirm("Можете написа")) {
                                                    var sa_n1;
                                                    sa_n1 = prompt("Напишите название акци");
                                                    if(sa_n1 != ds_sta1.app_1 && sa_n1 == ds_sta1.ama_1) {
                                                        if(confirm("Вы хотите купить вот эту акци" + " " + ds_sta1.ama_1 + "$")) {
                                                            if(confirm("Хотите купи")) {
                                                                if(confirm("Акция купле")) {
                                                                    var su_com1 = eval(pass_comma2.comm_psw1.pas_com1 - ds_sta1.ama_1);
                                                                    Object.defineProperty(pass_comma2.comm_psw1, "pas_comch11", {value:su_com1, writable:true, enumerable:true, configurable:true});
                                                                    if(pass_comma2.comm_psw1.pas_comch11 != pass_comma2.comm_psw1.pas_com1 && ds_sta1.hasOwnProperty("pos_1") == true) {
                                                                        if(confirm("Ваш балан" + " " + pass_comma2.comm_psw1.pas_comch11)) {

                                                                        } else {
                                                                            
                                                                        }
                                                                    }
                                                                }
                                                            } else {
                                                                if(confirm("Хотите повыбира")) {
                                                                    for(i_1 in ds_sta1) {
                                                                        alert("sal" + ds_sta1 + " = " + ds_sta1[i_1]);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if(confirm("Можете посмотреть список това")) {

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