import 'jest';
import 'should';
import * as td from 'testdouble';
import tdJest from 'testdouble-jest';

tdJest(td, jest);

afterEach(() => {
  td.reset();
});
