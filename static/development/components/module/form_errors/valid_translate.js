export default function valid_translate() {
    let lang_site = location.pathname.split('/')[1];
    let error_text = {};
    // перевіряє мову сайту, і вертає потрібний переклад
    switch (lang_site) {
        case 'uk':
            error_text.required = 'Поле обов\'язково для заповнення';
            error_text.email = 'Поле має містити email';
            error_text.min_pass = 'Пароль занадто короткий';
            break;
        case 'ru':
            error_text.required = 'Поле обязательно для заполнения';
            error_text.email = 'Поле должно содержать email';
            error_text.min_pass = 'Пароль слишком краток';

            break;
        case 'en':
            error_text.required = 'The field is required';
            error_text.email = 'The field must contain an email';
            error_text.min_pass = 'Password is too short';

            break;
        default:
            error_text.required = 'Поле обов\'язково для заповнення';
            error_text.email = 'Поле має містити email';
            error_text.min_pass = 'Пароль занадто короткий';
    }


    return error_text;
}