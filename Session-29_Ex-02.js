let choice
const products = []
let searchID
let priceFilterLower
let priceFilterHigher

const addProduct = (products) => {
    const productID = +prompt(`Nhap ID san pham`)
    const productName = prompt(`Nhap ten san pham`)
    const productPrice = +prompt(`Nhap gia san pham`)
    const productCategory = prompt(`Nhap danh muc san pham`)
    const productQuantity = +prompt(`So luong san pham`)
    const newProduct = {
        productID,
        productName,
        productPrice,
        productCategory,
        productQuantity,
    }
    products.push(newProduct)
    console.log(`Da them san pham thanh cong`);
}

const displayProducts = (products) => {
    console.log(`Danh sach san pham hien co`);
    products.forEach((product,index) => {
        console.log(`${index+1}. ${product.productName}`);
    });
}

const productDetail = (products,searchID) => {
    let index = products.findIndex((product) => product.productID === searchID)
    if (index !== -1) {
        console.log(`ID san pham : ${products[index].productID}`);
        console.log(`Ten san pham : ${products[index].productName}`);
        console.log(`Gia san pham : ${products[index].productPrice}`);
        console.log(`Danh muc san pham : ${products[index].productCategory}`);
        console.log(`So luong san pham trong kho : ${products[index].productQuantity}`);
        return
    }
    else{
        console.log(`Khong tim thay san pham`);
        return
    }
}

const updateProduct = (products,searchID) => {
    let index = products.findIndex((product) => product.productID === searchID)
    if (index !== -1) {
        products[index].productName = prompt("Nhap ten san pham")
        products[index].productPrice = +prompt(`Nhap gia san pham`)
        products[index].productCategory = prompt(`Nhap danh muc san pham`)
        products[index].productQuantity = +prompt(`Nhap so luong san pham`)
        return
    }
    else{
        console.log(`Khong tim thay san pham`);
        return
    }
}

const deleteProduct = (products) => {
    let index = products.findIndex((product) => product.productID === searchID)
    if (index !== -1) {
        products.splice(index,1)
        console.log(`Da xoa san pham thanh cong`);
        return
    }
    else{
        console.log(`Khong tim thay san pham`);
        return
    }
}

const filterProduct = (products,priceFilterLower,priceFilterHigher) => {
    const priceFilter = products.filter((product) => product.productPrice >= priceFilterLower && product.productPrice <= priceFilterHigher);
    console.log(priceFilter.lenght);
    console.log(priceFilter);
    
    
    priceFilter.forEach((product, index) => {
        console.log(`${index + 1}. ${product}`);
    });
}

do {
    searchID = 0
    priceFilterLower = 0
    priceFilterHigher = 0
    choice = +prompt(`
        1. Them san pham vao danh sach san pham
        2. Hien thi tat ca san pham
        3. Hien thi chi tiet san pham theo id
        4. Cap nhat thong tin san pham theo id
        5. Xoa san pham theo id
        6. Loc san pham theo khoang gia
        7. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                addProduct(products)
                break;
            case 2:
                displayProducts(products)
                break;
            case 3:
                searchID = +prompt(`Nhap ID`)
                productDetail(products,searchID)
                break;
            case 4:
                searchID = +prompt(`Nhap ID`)
                updateProduct(products,searchID)
                break;
            case 5:
                searchID = +prompt(`Nhap ID`)
                deleteProduct(products,searchID)
                break;
            case 6:
                priceFilterLower = +prompt(`Nhap gia thap nhat`)
                priceFilterHigher = +prompt(`Nhap gia cao nhat`)
                filterProduct(products,priceFilterLower,priceFilterHigher)
                break;
            case 7:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }
} while (choice !== 7);