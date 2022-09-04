export interface Itheme {
    color: string
    primary: string
    secondary: string
    colorSecondary: string
    backgroundColor: string
    backgroundColorSecondary: string
}

export interface ITeacher {
    _id: string
    name: string
    gender: string
    login: string
    password: string
    classCount: number
    created: {
        date: string
        hour: string
        system: Date
    }
}

export interface IClass {
    _id: string
    name: string
    grade: string
    shift: string
    teacher: ITeacher
    studentCount: number
    created: {
        date: string
        hour: string
        system: Date
    }
}

export interface IStudent {
    _id: string
    name: string
    gender: string
    birth: string
    cpf: string
    responsible1: string
    responsible2: string
    telephone: string
    email: string
    address: {
        cep: string
        city: string
        neighborhood: string
        street: string
        number: number
        complement: string
    }
    matriculation: string
    class: IClass
    teacher: ITeacher
    situation: string
    observation: string
    matters: {
        portuguese: IMatterStudent
        english: IMatterStudent
        math: IMatterStudent
        history: IMatterStudent
        arts: IMatterStudent
        science: IMatterStudent
        geography: IMatterStudent
        religion: IMatterStudent
        physicalEducation: IMatterStudent
    }
    payments: {
        '01': IPaymentStudent
        '02': IPaymentStudent
        '03': IPaymentStudent
        '04': IPaymentStudent
        '05': IPaymentStudent
        '06': IPaymentStudent
        '07': IPaymentStudent
        '08': IPaymentStudent
        '09': IPaymentStudent
        '10': IPaymentStudent
        '11': IPaymentStudent
        '12': IPaymentStudent
    }
    photo: {
        name: string
        key: string
        size: number
        mimeType: string
        url: string
        width: number
        height: number
    }
    created: {
        date: string
        hour: string
        system: Date
    }
}