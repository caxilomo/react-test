import requireDir from 'require-dir';
import yargs from 'yargs';
import path from 'path';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

const argv = yargs
  .alias('o', 'only')
  .argv;

if (argv.o) {
  require(path.join(process.cwd(), argv.o)); //eslint-disable-line
} else {
  requireDir('./containers/', { recurse: true });
}
