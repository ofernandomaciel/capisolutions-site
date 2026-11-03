import {type SchemaTypeDefinition} from 'sanity'
import {articleType} from './article'
import {categoryType} from './category'
import {interviewType} from './interview'
import {personType} from './person'
import {richTextType} from './objects/richText'
import {seoType} from './objects/seo'
import {sourceType} from './objects/source'
import {tagType} from './tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seoType, richTextType, sourceType, personType, categoryType, tagType, articleType, interviewType],
}
