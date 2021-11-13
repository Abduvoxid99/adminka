
import {notification} from 'antd';
export const createMessage = type => {
    notification[type]({
        message: 'Success',
        description:
            "Muvaffaqiyatli qo'shildi",
    });
};

export const editMessage = type => {
    notification[type]({
        message: 'Info',
        description:
            "Muvaffaqiyatli o'zgartirildi",
    });
};

export const deleteMessage = type => {
    notification[type]({
        message: 'Deleted',
        description:
            "Muvaffaqiyatli o'chirildi",
    });
};


export const errorMessage = type => {
    notification[type]({
        message: 'Error',
        description:
            "Xatolik yuz berdi",
    });
};

export const errorLogin = type => {
    notification[type]({
        message: 'Error',
        description:
            "Login yoki parol xato",
    });
};