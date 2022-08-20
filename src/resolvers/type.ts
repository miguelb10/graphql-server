import { IResolvers } from '@graphql-tools/utils';
import { database } from '../data/data.store';
import _ from 'lodash';

const type : IResolvers = {
  Student: {
    courses: parent => {
      const courseList : Array<any> = [];
      parent.courses.map((course: string) => {
        courseList.push(_.filter(database.courses, ['id', course])[0])
      });
      return courseList;
    }
  }
}

export default type;