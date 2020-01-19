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
    codemod: 'components-index-file.js',
    dist: 'stories/symbolsComponentsMapping/components.js',
    description : 'Add component to components mapping file'
  },
  {
    codemod: 'symbols-file.js',
    dist: 'stories/symbolsComponentsMapping/symbols.js',
    description: 'Add UX symbol to symbols mapping file'
  },
  {
    codemod: 'symbol-to-component-family-file.js',
    dist: 'stories/symbolsComponentsMapping/families/notClassifiedFamily.js',
    description: 'Add symbol to component mapping',
  }
];
