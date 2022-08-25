import { IResolvers } from '@graphql-tools/utils';
import _ from 'lodash';
import { database } from '../data/data.store';

const mutation: IResolvers = {
  Mutation: {
    newCourse(__: void, { course }): any {
      const itemCourse = {
        id: String(database.courses.length + 1),
        title: course.title,
        description: course.description,
        clases: course.clases,
        time: course.time,
        level: course.level,
        logo: course.logo,
        path: course.path,
        teacher: course.teacher,
        reviews: []
      }
      if (database.courses.filter(item => item.title === itemCourse.title).length === 0) {
        database.courses.push(itemCourse);
        return itemCourse;
      }
      return {
        id: '-1',
        title: 'Course already exist!',
        description: '',
        clases: -1,
        time: 0.0,
        level: 'ALL',
        logo: '',
        path: '',
        teacher: '',
        reviews: []
      }
    },
    updateCourse(__: void, { course }): any {
      const currentElement = _.findIndex(database.courses, function (obj) {
        return obj.id === course.id
      });
      if (currentElement > -1) {
        const reviews = database.courses[currentElement].reviews;
        course.reviews = reviews;
        database.courses[currentElement] = course;
        return course;
      }

      return {
        id: '-1',
        title: 'Course does not exist!',
        description: '',
        clases: -1,
        time: 0.0,
        level: 'ALL',
        logo: '',
        path: '',
        teacher: '',
        reviews: []
      }
    },
    deleteCourse(__: void, { id }): any {
      const currentElement = _.remove(database.courses, function (obj) {
        return obj.id === id;
      });
      if (currentElement[0] === undefined) {
        return {
          id: '-1',
          title: 'Course does not exist!',
          description: '',
          clases: -1,
          time: 0.0,
          level: 'ALL',
          logo: '',
          path: '',
          teacher: '',
          reviews: []
        }
      }
      return currentElement[0];
    }
  }
}

export default mutation;