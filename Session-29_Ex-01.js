let choice
let searchPhone
let searchID
const contacts = []

const addContact = (contacts) => {
    let id = +prompt("Nhap ID")
    if (contacts.some((contact) => id === contact.id)) {
        console.log(`Da ton tai id trong danh ba`);
        return
    }
    let name = prompt("Nhap ten")
    let email = prompt("Nhap email")
    let phone = prompt("Nhap so dien thoai")
    let newContact = {
        id,
        name,
        email,
        phone
    }
    contacts.push(newContact)
    console.log(`Da them vao danh ba thanh cong`);
}

const displayContact = (contacts) => {
    contacts.forEach((contact, index) => {
        console.log(`\nThong tin doi tuong thu ${index + 1}`);
        console.log(`ID : ${contact.id}`);
        console.log(`Name : ${contact.name}`);
        console.log(`Email : ${contact.email}`);
        console.log(`Phone : ${contact.phone}`);
    });
    
}

const searchContact = (contacts,searchPhone) => {
    let index = contacts.findIndex((contact) => contact.phone === searchPhone)
    if (index !== -1) {
        console.log(`ID : ${contacts[index].id}`);
        console.log(`Name : ${contacts[index].name}`);
        console.log(`Email : ${contacts[index].email}`);
        console.log(`Phone : ${contacts[index].phone}`);
    }
    else{
        console.log(`Khong tim thay thong tin`);
    }
}

const updateContact = (contacts,searchID) => {
    let index = contacts.findIndex((contact) => contact.id === searchID)
    if (index !== -1) {
            choice = 0
            choice = +prompt(`
            1. Update Name
            2. Update Email
            3. Update Phonenumber
            Lua chon cua ban`)
            switch (choice) {
                case 1:
                    contacts[index].name = prompt(`Nhap ten moi`)
                    console.log(`Da thay doi thong tin thanh cong`);
                    break;
                case 2:
                    contacts[index].email = prompt(`Nhap email moi`)
                    console.log(`Da thay doi thong tin thanh cong`);
                    break;
                case 3:
                    contacts[index].phone = prompt(`Nhap so dien thoai moi`)
                    console.log(`Da thay doi thong tin thanh cong`);
                    break;
                default:
                    console.log(`Lua chon khong phu hop`);
                    break;
            }
    }
    else{
        console.log(`Khong tim thay thong tin`);
    }
}

const deleteContact = (contacts,searchID) => {
    let index = contacts.findIndex((contact) => contact.id === searchID)
    if (index !== -1) {
        contacts.splice(index,1)
        return `Da xoa thanh cong`
    }
    else{
        console.log(`Khong tim thay thong tin`);
    }
}

do {
    searchPhone = ``
    searchID = 0
    choice = +prompt(`
        1. Them doi tuong contact vao danh sach lien he
        2. Hien thi danh sach danh ba
        3. Tim kiem thong tin contact theo so dien thoai
        4. Cap nhat thong tin Contact theo id
        5. Xoa 1 doi tuong Contact khoi danh sach danh ba theo id
        6. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                addContact(contacts)
                break;
            case 2:
                if (contacts.length === 0) {
                    console.log(`Danh sach danh ba trong!`);
                    break
                }
                displayContact(contacts)
                break;
            case 3:
                if (contacts.length === 0) {
                    console.log(`Danh sach danh ba trong!`);
                    break
                }
                searchPhone = prompt("Nhap so dien thoai")
                searchContact(contacts,searchPhone)
                break;
            case 4:
                if (contacts.length === 0) {
                    console.log(`Danh sach danh ba trong!`);
                    break
                }
                searchID = +prompt("Nhap ID")
                updateContact(contacts,searchID)
                break;
            case 5:
                if (contacts.length === 0) {
                    console.log(`Danh sach danh ba trong!`);
                    break
                }
                searchID = +prompt("Nhap ID")
                deleteContact(contacts,searchID)
                break;
            case 6:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }
} while (choice !== 6);