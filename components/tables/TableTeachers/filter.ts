import { ITeacher } from '../../../types'

function filter(
    teacher: ITeacher,
    nameFilter: string,
    studentCountFilter: number,
    genderFilter: string | null | undefined
) {
    if (teacher.name.toUpperCase().includes(nameFilter.toUpperCase())) {
        if (studentCountFilter <= teacher.classCount) {
            if (!genderFilter || genderFilter.toUpperCase().includes(teacher.gender.toUpperCase())) {
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
}

export default filter