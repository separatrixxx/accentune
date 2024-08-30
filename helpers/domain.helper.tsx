import { Subject } from "../interfaces/user.interface";


export function getDomain(subject: Subject) {
    if (subject === 'obj') {
        return process.env.NEXT_PUBLIC_DOMAIN_OBJ;
    } else {
        return process.env.NEXT_PUBLIC_DOMAIN_RUS;
    }
};
