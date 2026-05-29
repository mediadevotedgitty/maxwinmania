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

      // Casino library — create once, reuse across country pages
      S.listItem()
        .title('Casinos')
        .schemaType('casino')
        .child(
          S.documentTypeList('casino')
            .title('All Casinos')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
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

      S.divider(),

      // Landing pages — single-offer promo pages for autoresponder emails
      S.listItem()
        .title('Landing Pages')
        .schemaType('landingPage')
        .child(
          S.documentTypeList('landingPage')
            .title('Landing Pages')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
    ])
