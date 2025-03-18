let choice
const accounts = []

const checkEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    return emailRegex.test(email)
}

const checkPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(password)
}

const register = (accounts) => {
    const email = prompt(`Nhap email`)
    const password = prompt(`Nhap mat khau`)
    if (!checkEmail(email)) {
        console.log("Email khong hop le");
        return;
    }
    if (!checkPassword(password)) {
        console.log("Mat khau khong hop le");
        return;
    }

    const existUser = accounts.find((acc) => acc.email === email);
    if (existUser) {
        console.log("Email da ton tai");
        return;
    }

    accounts.push({ email, password });
    console.log("Dang ky thanh cong");
}

const login = (accounts) => {
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");
    const user = accounts.find((acc) => acc.email === username && acc.password === password);
    if (user) {
        console.log("Dang nhap thanh cong");
    } else {
        console.log("Sai email hoac mat khau");
    }
}

do {
    choice = +prompt(`
        1. Dang ky nguoi dung moi
        2. Dang nhap nguoi dung
        3. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                register(accounts)
                break;
            case 2:
                login(accounts)
                break;
            case 3:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }
} while (choice !== 3);


