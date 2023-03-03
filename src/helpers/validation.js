import { patterns } from '../mocks/data/validation-patterns';


const validate = (
    e,
    setName,
    setEmail,
    setPassword) => {
    const { name, value } = e.currentTarget;

    switch (name) {
        case "name":
            setName(patterns.NAME.test(value));
            break;
        case "email":
            setEmail(patterns.EMAIL.test(value));
            break;
        case "password":
            value.length < patterns.PASSWORD
                ? setPassword(false)
                : setPassword(true);
            break;
        default:
            return;
    }
};

export { validate };