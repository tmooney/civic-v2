import { TypePolicies } from '@apollo/client/cache';
import { relayStylePagination } from '@apollo/client/utilities';

export const CvcTypePolicies: TypePolicies = {
  Gene: {
    fields: {
      comments: relayStylePagination(),
      revisions: relayStylePagination(),
      events: relayStylePagination(),
      variants: relayStylePagination(),
    },
  },
  Query: {
    fields: {
      browseGenes: relayStylePagination([
        'entrezSymbol',
        'drugName',
        'geneAlias',
        'diseaseName',
      ]),
      browseVariants: relayStylePagination([
        'variantName',
        'entrezSymbol',
        'diseaseName',
        'drugName',
      ]),
      browseVariantGroups: relayStylePagination([
        'name',
        'geneNames',
        'variantNames',
      ]),
      browseSources: relayStylePagination([
        'name',
        'year',
        'sourceType',
        'citationId',
        'author',
        'journal',
      ]),
      browseDiseases: relayStylePagination(['name', 'doid', 'geneNames']),
      events: relayStylePagination([
        'subject',
        'organizationId',
        'originatingUserId',
        'eventType',
      ]),
      variants: relayStylePagination([
        'geneId',
        'name',
        'evidenceStatusFilter',
      ]),
      comments: relayStylePagination(['originatingUserId', 'subject']),
      evidenceItems: relayStylePagination([
        'diseaseName',
        'drugName',
        'id',
        'description',
        'evidenceLevel',
        'evidenceDirection',
        'clinicalSignificance',
        'evidenceType',
        'evidenceRating',
        'variantOrigin',
        'variantId',
        'assertionId',
        'organizationId',
        'userId',
        'phenotypeId',
        'diseaseId'
      ]),
      assertions: relayStylePagination([
        'diseaseName',
        'drugName',
        'id',
        'summary',
        'assertionDirection',
        'clinicalSignificance',
        'assertionType',
        'variantId',
        'ampLevel',
        'geneName',
        'variantName',
        'evidenceId',
        'organizationId',
        'userId',
        'phenotypeId',
        'diseaseId'
      ]),
      organizations: relayStylePagination(['name', 'id']),
      flags: relayStylePagination([
        'flaggable',
        'flaggingUserId',
        'resolvingUserId',
        'state',
      ]),
      phenotypes: relayStylePagination(['hpoId', 'name']),
    },
  },
};