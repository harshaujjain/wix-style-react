module.exports = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.js',
    description: 'Add story to the stories file',
  },
  {
    codemod: 'index-file.js',
    dist: 'src/index.js',
    description: 'Add component export to the index file',
  },
  {
    codemod: 'components-cheatsheet-file.js',
    dist: 'stories/symbolsComponentsMapping/components.js',
    description : 'Add component to cheatsheet components index file'
  },
];
