let choice
const menu = []
let searchName
let searchPrice
let searchDescription

const addDish = (menu) => {
    const dishName = prompt(`Nhap ten mon`)
    const dishPrice = +prompt(`Nhap gia`)
    const dishDescription = prompt(`Nhap mo ta`)
    const newDish = {
        dishName,
        dishPrice,
        dishDescription,
    }
    menu.push(newDish)
    console.log(`Da them mon an thanh cong`);
    return;
}

const deleteDish = (menu, searchName) => {
    searchName = searchName.toLowerCase().trim();
    let index = menu.findIndex((dish) => dish.dishName.toLowerCase().trim() === searchName);

    if (index !== -1) {
        menu.splice(index, 1);
        console.log(`Xoa mon an thanh cong`);
        return
    } else {
        console.log(`Khong tim thay mon an`);
        return
    }
};


const displayMenu = (menu) => {
    console.log(`Cac mon an trong menu`);
    menu.forEach((element,index) => {
        console.log(`
            ${index+1}. ${element.dishName}`);
    });
    return
}

const updateDish = (menu,searchName) => {
    searchName = searchName.toLowerCase().trim()
    let index = menu.findIndex((dish) => dish.dishName.includes(searchName))
    if (index !== -1) {
        menu[index].dishName = prompt(`Nhap ten mon`)
        menu[index].dishPrice = +prompt(`Nhap gia`)
        menu[index].dishDescription = prompt(`Nhap mo ta`)
        console.log(`Da cap nhat thong tin thanh cong`);
        return
    }
    else{
        console.log(`Khong tim thay mon an`);
        return
    }
}

const findDish = (menu,searchName) => {
    searchName = searchName.toLowerCase().trim()
    let filterDish = menu.filter((dish) => dish.dishName.includes(searchName))
    if (filterDish.lenght !== 0) {
        console.log(`\nThong tin mon an :`);
        filterDish.forEach((element) => {
            console.log(`     
                Ten mon an :${element.dishName}
                Gia : ${element.dishPrice}
                Mo ta : ${element.dishDescription}`);    
        });
        return
    }
    else{
        console.log(`Khong tim thay mon an`);
        return
    }
} 

do {
    searchName = ``
    searchPrice = 0
    searchDescription = ``
    choice = +prompt(`
        1. Them mon an vao danh muc
        2. Xoa mon an theo ten khoi danh muc
        3. Cap nhat thong tin theo ten cua mon an
        4. Hien thi toan bo menu gom tung danh muc va tung mon an
        5. Tim kiem mon an theo ten trong toan bo menu
        6. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                addDish(menu)
                break;
            case 2:
                searchName = prompt("Nhap ten mon an")
                deleteDish(menu,searchName)
                break;
            case 3:
                searchName = prompt("Nhap ten mon an")
                updateDish(menu,searchName)
                break;
            case 4:
                displayMenu(menu)
                break;
            case 5:
                searchName = prompt("Nhap ten mon an")
                findDish(menu,searchName)
                break;
            case 6:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon cua ban`);
                break;
        }
} while (choice !== 6);