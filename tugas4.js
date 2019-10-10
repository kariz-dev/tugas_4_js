/* tugas 4 Javascript */
// author : Muhammad Rizwan


    var budi = 170;
    var andi = 175;
    var doni = 160;

    
    if(budi>andi){
        if(budi>doni&&andi>doni){
            console.log("budi tertinggi, andi kedua, doni terpendek")
        }else if(budi>doni&&andi<doni){
            console.log("budi tertinggi, doni kedua, andi terpendek")
        }else{
            console.log("doni tertinggi, budi kedua, andi terpendek")
        }
    }else{
        if(budi<doni&&andi>doni){
            console.log("andi tertinggi, doni kedua, budi terpendek")
        }else if(budi>doni&&andi>doni){
            console.log("andi tertinggi, budi kedua, doni terpendek")
        }else{
            console.log("doni tertinggi, andi kedua, budi terpendek")
        }
    }
