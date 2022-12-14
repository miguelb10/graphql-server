import { IResolvers } from '@graphql-tools/utils';
import { database } from '../data/data.store';

const query: IResolvers = {
  Query: {
    students(): any {
      return database.students;
    },
    student(__: void, { id }): any {
      const result = database.students.filter(student => student.id === id)[0];
      if(result === undefined) {
        return {
          id: '-1',
          name: `Student not found by ID ${id}`,
          email: '',
          courses: []
        }
      }
      return result;
    },
    courses(): any {
      return database.courses;
    },
    course(__: void, { id }): any {
      const result = database.courses.filter(course => course.id === id)[0];
      if(result === undefined) {
        return {
          id: '-1',
          title: `Course not found by ID ${id}`,
          description: '',
          clases: -1,
          time: 0.0,
          logo: '',
          level: 'TODOS',
          path: '',
          teacher: '',
          reviews: []
        }
      }
      return result;
    }
  }
}

export default query;