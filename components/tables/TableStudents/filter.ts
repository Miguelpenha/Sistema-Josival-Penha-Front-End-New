import { IStudent } from '../../../types'

function filter(
    student: IStudent,
    classFilter: string | null | undefined,
    teacherFilter: string | null | undefined,
    nameFilter: string,
    responsibleFilter: string,
    genderFilter: string | null | undefined
) {
    if (!classFilter || classFilter === student.class.name) {
        if (!teacherFilter || teacherFilter === student.teacher.name) {
            if (student.name.toUpperCase().includes(nameFilter.toUpperCase())) {
                if (student.responsible1.toUpperCase().includes(responsibleFilter.toUpperCase()) || student.responsible2.toUpperCase().includes(responsibleFilter.toUpperCase())) {
                    if (!genderFilter || genderFilter.toUpperCase().includes(student.gender.toUpperCase())) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

export default filter