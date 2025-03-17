let choice
const accounts = []

const checkEmail = (username) => {
    return username.includes("@") && (username.endsWith(".com") || username.endsWith(".vn"));
}

const checkPassword = (password) => {
    if (password.length < 6){ 
        return false
    };
    let upperCase = false;
    let lowerCase = false;
    let special = false;

    for (const char of password) {
        if (char >= 'A' && char <= 'Z'){
            upperCase = true;
        }
        else if (char >= 'a' && char <= 'z'){
            lowerCase = true;
        }
        else if ((char >= '!' && char <= '/') || (char >= ':' && char <= '@') || (char >= '[' && char <= '`') || (char >= '{' && char <= '~')){
            special = true;
        }
        if (upperCase && lowerCase && special){
            return true;
        }
    }
    return false;
}

const register = (accounts) => {
    const username = prompt(`Nhap username`)
    const password = prompt(`Nhap mat khau`)
    if (!checkEmail(username)) {
        console.log("Email khong hop le");
        return;
    }
    if (!checkPassword(password)) {
        console.log("Mat khau khong hop le");
        return;
    }

    const existUser = accounts.find((acc) => acc.username === username);
    if (existUser) {
        console.log("Email da ton tai");
        return;
    }

    accounts.push({ username, password });
    console.log("Dang ky thanh cong");
}

const login = (accounts) => {
    const username = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");
    const user = accounts.find((acc) => acc.username === username && acc.password === password);
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

