import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Homepage placeholder — purely informational for now
      S.listItem()
        .title('Homepage')
        .child(
          S.list()
            .title('Homepage')
            .items([
              S.listItem()
                .title('Country Pages')
                .child(
                  S.documentTypeList('countryPage')
                    .title('All Country Pages')
                    .defaultOrdering([{ field: 'region', direction: 'asc' }])
                ),
            ])
        ),

      S.divider(),

      // All country pages — create new ones here
      S.listItem()
        .title('Country Pages')
        .schemaType('countryPage')
        .child(
          S.documentTypeList('countryPage')
            .title('Country Pages')
            .defaultOrdering([{ field: 'country', direction: 'asc' }])
        ),
    ])
