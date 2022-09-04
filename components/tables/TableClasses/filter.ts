import { IClass } from '../../../types'

function filter(
    classSelect: IClass,
    teacherFilter: string | null | undefined,
    gradeFilter: string | null | undefined,
    shiftFilter: string | null | undefined,
    nameFilter: string,
    studentCountFilter: number
) {
    if (!teacherFilter || teacherFilter === classSelect.teacher.name) {
        if (!gradeFilter || gradeFilter.toUpperCase().includes(classSelect.grade.toUpperCase())) {
            if (!shiftFilter || shiftFilter.toUpperCase().includes(classSelect.shift.toUpperCase())) {
                if (classSelect.name.toUpperCase().includes(nameFilter.toUpperCase())) {
                    if (studentCountFilter <= classSelect.studentCount) {
                        return true
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