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
      database.courses.push(itemCourse);
      return itemCourse;
    }
  }
}

export default mutation;