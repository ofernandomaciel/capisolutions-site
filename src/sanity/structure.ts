import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('CapiSolutions Newsroom')
    .items([
      S.documentTypeListItem('article').title('Artigos'),
      S.documentTypeListItem('interview').title('Entrevistas'),
      S.divider(),
      S.documentTypeListItem('person').title('Pessoas'),
      S.documentTypeListItem('category').title('Categorias'),
      S.documentTypeListItem('tag').title('Tags'),
    ])
