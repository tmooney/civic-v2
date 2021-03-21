/* eslint-disable */
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { AppModule } from '../app.module';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  /** Represents untyped JSON */
  JSON: any;
};



/** Autogenerated input type of AcceptRevision */
export type AcceptRevisionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  organizationId?: Maybe<Scalars['Int']>;
};

/** Autogenerated return type of AcceptRevision */
export type AcceptRevisionPayload = {
  __typename?: 'AcceptRevisionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  revision: Revision;
  supersededRevisions: Array<Revision>;
};

/** Autogenerated input type of AddComment */
export type AddCommentInput = {
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  subject: CommentableInput;
  title?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddComment */
export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Comment>;
};

export type AdvancedSearchResult = {
  __typename?: 'AdvancedSearchResult';
  permalinkId?: Maybe<Scalars['String']>;
  resultIds: Array<Scalars['Int']>;
  searchEndpoint: Scalars['String'];
};

export enum BooleanOperator {
  And = 'AND',
  Or = 'OR'
}

export type BooleanSearchInput = {
  value: Scalars['Boolean'];
};

export type BrowseGene = {
  __typename?: 'BrowseGene';
  aliases?: Maybe<Array<GeneAlias>>;
  assertionCount: Scalars['Int'];
  description: Scalars['String'];
  diseases?: Maybe<Array<Disease>>;
  drugs?: Maybe<Array<Drug>>;
  entrezId: Scalars['Int'];
  evidenceItemCount: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  variantCount: Scalars['Int'];
};

/** The connection type for BrowseGene. */
export type BrowseGeneConnection = {
  __typename?: 'BrowseGeneConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrowseGeneEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BrowseGene>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  /** Total # of pages, based on total count and pagesize */
  totalPageCount: Scalars['Int'];
};

/** An edge in a connection. */
export type BrowseGeneEdge = {
  __typename?: 'BrowseGeneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<BrowseGene>;
};

export type ClinicalTrial = {
  __typename?: 'ClinicalTrial';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  nctId: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String'];
  commentor: User;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export enum CommentableEntities {
  Gene = 'GENE'
}

/** Entity to comment on */
export type CommentableInput = {
  entityType: CommentableEntities;
  id: Scalars['Int'];
};

export type Disease = {
  __typename?: 'Disease';
  name: Scalars['String'];
};

export type Drug = {
  __typename?: 'Drug';
  name: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['Int'];
  organization: Organization;
  originatingUser: User;
};

export type EvidenceItem = {
  __typename?: 'EvidenceItem';
  description: Scalars['String'];
  id: Scalars['Int'];
  variant: Variant;
};

export type Flag = {
  __typename?: 'Flag';
  id: Scalars['Int'];
};

/** Autogenerated input type of FlagEntity */
export type FlagEntityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  organizationId?: Maybe<Scalars['Int']>;
  subject: FlaggableInput;
};

/** Autogenerated return type of FlagEntity */
export type FlagEntityPayload = {
  __typename?: 'FlagEntityPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  flag?: Maybe<Flag>;
};

export enum FlaggableEntities {
  Gene = 'GENE'
}

/** Entity to flag */
export type FlaggableInput = {
  entityType: FlaggableEntities;
  id: Scalars['Int'];
};

export type Gene = {
  __typename?: 'Gene';
  aliases?: Maybe<Array<GeneAlias>>;
  comments?: Maybe<Array<Comment>>;
  description: Scalars['String'];
  entrezId: Scalars['Int'];
  id: Scalars['Int'];
  lifecycleActions: Lifecycle;
  myGeneInfoDetails?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  officialName: Scalars['String'];
  revisions?: Maybe<Array<Revision>>;
  sources?: Maybe<Array<Source>>;
  variants?: Maybe<Array<Variant>>;
};

export type GeneAlias = {
  __typename?: 'GeneAlias';
  name: Scalars['String'];
};

export type GeneFields = {
  description: Scalars['String'];
  sourceIds: Array<Scalars['Int']>;
};

export type GeneSearchFilter = {
  alias?: Maybe<StringSearchInput>;
  booleanOperator?: Maybe<BooleanOperator>;
  description?: Maybe<StringSearchInput>;
  entrezId?: Maybe<IntSearchInput>;
  entrezSymbol?: Maybe<StringSearchInput>;
  hasAssertion?: Maybe<BooleanSearchInput>;
  id?: Maybe<IntSearchInput>;
  openRevisionCount?: Maybe<IntSearchInput>;
  subFilters?: Maybe<Array<GeneSearchFilter>>;
};

export type GenesSort = {
  /** Available columns for sorting */
  column: GenesSortColumns;
  /** Sort direction */
  direction: SortDirection;
};

export enum GenesSortColumns {
  AssertionCount = 'assertionCount',
  DiseaseName = 'diseaseName',
  DrugName = 'drugName',
  EntrezSymbol = 'entrezSymbol',
  EvidenceItemCount = 'evidenceItemCount',
  GeneAlias = 'geneAlias',
  VariantCount = 'variantCount'
}


export type IntSearchInput = {
  comparisonOperator: IntSearchOperator;
  value: Scalars['Int'];
};

export enum IntSearchOperator {
  /** Equal To */
  Eq = 'EQ',
  Ge = 'GE',
  Gt = 'GT',
  Le = 'LE',
  Lt = 'LT',
  Ne = 'NE'
}


export type Lifecycle = {
  __typename?: 'Lifecycle';
  lastCommentedOn?: Maybe<Event>;
  lastModified?: Maybe<Event>;
  lastReviewed?: Maybe<Event>;
};

export type LinkoutData = {
  __typename?: 'LinkoutData';
  currentValue: ModeratedField;
  diffValue: ModeratedFieldDiff;
  name: Scalars['String'];
  suggestedValue: ModeratedField;
};

/** Fields that can have revisions can be either scalar values or complex objects */
export type ModeratedField = ObjectField | ScalarField;

/** Fields that can have revisions can be either scalar values or complex objects */
export type ModeratedFieldDiff = ObjectFieldDiff | ScalarField;

export type ModeratedObjectField = {
  __typename?: 'ModeratedObjectField';
  displayName: Scalars['String'];
  displayType: Scalars['String'];
  entityType: Scalars['String'];
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptRevision?: Maybe<AcceptRevisionPayload>;
  addComment?: Maybe<AddCommentPayload>;
  flagEntity?: Maybe<FlagEntityPayload>;
  rejectRevision?: Maybe<RejectRevisionPayload>;
  suggestGeneRevision?: Maybe<SuggestGeneRevisionPayload>;
};


export type MutationAcceptRevisionArgs = {
  input: AcceptRevisionInput;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationFlagEntityArgs = {
  input: FlagEntityInput;
};


export type MutationRejectRevisionArgs = {
  input: RejectRevisionInput;
};


export type MutationSuggestGeneRevisionArgs = {
  input: SuggestGeneRevisionInput;
};

export type ObjectField = {
  __typename?: 'ObjectField';
  objects: Array<ModeratedObjectField>;
};

export type ObjectFieldDiff = {
  __typename?: 'ObjectFieldDiff';
  addedObjects: Array<ModeratedObjectField>;
  keptObjects: Array<ModeratedObjectField>;
  removedObjects: Array<ModeratedObjectField>;
};

export type Organization = {
  __typename?: 'Organization';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  browseGenes: BrowseGeneConnection;
  /** Find a gene by CIViC ID */
  gene?: Maybe<Gene>;
  searchByPermalink: AdvancedSearchResult;
  searchGenes: AdvancedSearchResult;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
};


export type QueryBrowseGenesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  diseaseName?: Maybe<Scalars['String']>;
  drugName?: Maybe<Scalars['String']>;
  entrezSymbol?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  geneAlias?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GenesSort>;
};


export type QueryGeneArgs = {
  id: Scalars['ID'];
};


export type QuerySearchByPermalinkArgs = {
  permalinkId: Scalars['String'];
};


export type QuerySearchGenesArgs = {
  createPermalink?: Maybe<Scalars['Boolean']>;
  query: GeneSearchFilter;
};


export type QueryUserArgs = {
  userId: Scalars['Int'];
};

/** Autogenerated input type of RejectRevision */
export type RejectRevisionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  id: Scalars['Int'];
  organizationId?: Maybe<Scalars['Int']>;
};

/** Autogenerated return type of RejectRevision */
export type RejectRevisionPayload = {
  __typename?: 'RejectRevisionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  revision: Revision;
};

export type Revision = {
  __typename?: 'Revision';
  comments: Array<Comment>;
  createdAt: Scalars['ISO8601DateTime'];
  currentValue: Scalars['JSON'];
  fieldName: Scalars['String'];
  id: Scalars['Int'];
  linkoutData: LinkoutData;
  revisionsetId: Scalars['String'];
  revisor: User;
  status: RevisionStatus;
  suggestedValue: Scalars['JSON'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type RevisionResult = {
  __typename?: 'RevisionResult';
  fieldName: Scalars['String'];
  id: Scalars['Int'];
  newlyCreated: Scalars['Boolean'];
  revisionsetId: Scalars['String'];
};

export enum RevisionStatus {
  Accepted = 'accepted',
  New = 'new',
  Rejected = 'rejected',
  Superseded = 'superseded'
}

export type ScalarField = {
  __typename?: 'ScalarField';
  value?: Maybe<Scalars['String']>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Source = {
  __typename?: 'Source';
  ascoAbstractId?: Maybe<Scalars['Int']>;
  citation: Scalars['String'];
  clinicalTrials?: Maybe<Array<ClinicalTrial>>;
  fullJournalTitle: Scalars['String'];
  id: Scalars['Int'];
  journal: Scalars['String'];
  name: Scalars['String'];
  publicationDay?: Maybe<Scalars['Int']>;
  publicationMonth: Scalars['Int'];
  publicationYear: Scalars['Int'];
  sourceType: SourceSource;
  sourceUrl: Scalars['String'];
  status: SourceStatus;
};

export enum SourceSource {
  Asco = 'ASCO',
  PubMed = 'PubMed'
}

export enum SourceStatus {
  FullyCurated = 'FullyCurated',
  PartiallyCurated = 'PartiallyCurated',
  Submitted = 'Submitted'
}

export type StringSearchInput = {
  comparisonOperator: StringSearchOperator;
  value: Scalars['String'];
};

export enum StringSearchOperator {
  Contains = 'CONTAINS',
  DoesNotContain = 'DOES_NOT_CONTAIN',
  Eq = 'EQ',
  Ne = 'NE',
  StartsWith = 'STARTS_WITH'
}

/** Autogenerated input type of SuggestGeneRevision */
export type SuggestGeneRevisionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  fields: GeneFields;
  id: Scalars['Int'];
  organizationId?: Maybe<Scalars['Int']>;
};

/** Autogenerated return type of SuggestGeneRevision */
export type SuggestGeneRevisionPayload = {
  __typename?: 'SuggestGeneRevisionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  gene: Gene;
  results: Array<RevisionResult>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  organizations?: Maybe<Array<Organization>>;
  role: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Variant = {
  __typename?: 'Variant';
  description: Scalars['String'];
  evidenceItems?: Maybe<Array<EvidenceItem>>;
  gene: Gene;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type BrowseGenesQueryVariables = Exact<{
  entrezSymbol?: Maybe<Scalars['String']>;
  drugName?: Maybe<Scalars['String']>;
  geneAlias?: Maybe<Scalars['String']>;
  diseaseName?: Maybe<Scalars['String']>;
  sortBy?: Maybe<GenesSort>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
}>;


export type BrowseGenesQuery = (
  { __typename?: 'Query' }
  & { browseGenes: (
    { __typename?: 'BrowseGeneConnection' }
    & Pick<BrowseGeneConnection, 'totalCount' | 'totalPageCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'BrowseGene' }
      & Pick<BrowseGene, 'id' | 'name'>
    )>>>, edges?: Maybe<Array<Maybe<(
      { __typename?: 'BrowseGeneEdge' }
      & Pick<BrowseGeneEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'BrowseGene' }
        & Pick<BrowseGene, 'id' | 'entrezId' | 'name' | 'variantCount' | 'evidenceItemCount' | 'assertionCount'>
        & { aliases?: Maybe<Array<(
          { __typename?: 'GeneAlias' }
          & Pick<GeneAlias, 'name'>
        )>>, diseases?: Maybe<Array<(
          { __typename?: 'Disease' }
          & Pick<Disease, 'name'>
        )>>, drugs?: Maybe<Array<(
          { __typename?: 'Drug' }
          & Pick<Drug, 'name'>
        )>> }
      )> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'>
    ) }
  ) }
);

export type GeneDetailQueryVariables = Exact<{
  geneId: Scalars['ID'];
}>;


export type GeneDetailQuery = (
  { __typename?: 'Query' }
  & { gene?: Maybe<(
    { __typename?: 'Gene' }
    & Pick<Gene, 'description' | 'entrezId' | 'id' | 'name' | 'officialName' | 'myGeneInfoDetails'>
    & { aliases?: Maybe<Array<(
      { __typename?: 'GeneAlias' }
      & Pick<GeneAlias, 'name'>
    )>>, lifecycleActions: (
      { __typename?: 'Lifecycle' }
      & { lastCommentedOn?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'createdAt' | 'id'>
        & { organization: (
          { __typename?: 'Organization' }
          & Pick<Organization, 'id' | 'name'>
        ), originatingUser: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        ) }
      )>, lastModified?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'createdAt' | 'id'>
        & { organization: (
          { __typename?: 'Organization' }
          & Pick<Organization, 'id' | 'name'>
        ), originatingUser: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        ) }
      )>, lastReviewed?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'createdAt' | 'id'>
        & { organization: (
          { __typename?: 'Organization' }
          & Pick<Organization, 'id' | 'name'>
        ), originatingUser: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        ) }
      )> }
    ), sources?: Maybe<Array<(
      { __typename?: 'Source' }
      & Pick<Source, 'id' | 'citation' | 'sourceUrl' | 'sourceType'>
    )>>, variants?: Maybe<Array<(
      { __typename?: 'Variant' }
      & Pick<Variant, 'id' | 'name' | 'description'>
    )>>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'createdAt' | 'title' | 'comment'>
      & { commentor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'role'>
        & { organizations?: Maybe<Array<(
          { __typename?: 'Organization' }
          & Pick<Organization, 'id' | 'name'>
        )>> }
      ) }
    )>>, revisions?: Maybe<Array<(
      { __typename?: 'Revision' }
      & Pick<Revision, 'id' | 'revisionsetId' | 'createdAt' | 'fieldName' | 'currentValue' | 'suggestedValue' | 'status'>
      & { linkoutData: (
        { __typename?: 'LinkoutData' }
        & Pick<LinkoutData, 'name'>
        & { diffValue: (
          { __typename?: 'ObjectFieldDiff' }
          & { addedObjects: Array<(
            { __typename?: 'ModeratedObjectField' }
            & Pick<ModeratedObjectField, 'id' | 'displayName' | 'displayType' | 'entityType'>
          )>, removedObjects: Array<(
            { __typename?: 'ModeratedObjectField' }
            & Pick<ModeratedObjectField, 'id' | 'displayName' | 'displayType' | 'entityType'>
          )>, keptObjects: Array<(
            { __typename?: 'ModeratedObjectField' }
            & Pick<ModeratedObjectField, 'id' | 'displayName' | 'displayType' | 'entityType'>
          )> }
        ) | (
          { __typename?: 'ScalarField' }
          & Pick<ScalarField, 'value'>
        ) }
      ), revisor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    )>> }
  )> }
);

export const BrowseGenesDocument = gql`
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    drugName: $drugName
    geneAlias: $geneAlias
    diseaseName: $diseaseName
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    nodes {
      id
      name
    }
    edges {
      cursor
      node {
        id
        entrezId
        name
        aliases {
          name
        }
        diseases {
          name
        }
        drugs {
          name
        }
        variantCount
        evidenceItemCount
        assertionCount
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
    totalPageCount
  }
}
    `;

  @Injectable({
    providedIn: AppModule
  })
  export class BrowseGenesGQL extends Apollo.Query<BrowseGenesQuery, BrowseGenesQueryVariables> {
    document = BrowseGenesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GeneDetailDocument = gql`
    query GeneDetail($geneId: ID!) {
  gene(id: $geneId) {
    description
    entrezId
    aliases {
      name
    }
    id
    lifecycleActions {
      lastCommentedOn {
        createdAt
        id
        organization {
          id
          name
        }
        originatingUser {
          id
          name
        }
      }
      lastModified {
        createdAt
        id
        organization {
          id
          name
        }
        originatingUser {
          id
          name
        }
      }
      lastReviewed {
        createdAt
        id
        organization {
          id
          name
        }
        originatingUser {
          id
          name
        }
      }
    }
    name
    officialName
    sources {
      id
      citation
      sourceUrl
      sourceType
    }
    variants {
      id
      name
      description
    }
    comments {
      id
      createdAt
      title
      comment
      commentor {
        id
        name
        organizations {
          id
          name
        }
        role
      }
    }
    revisions {
      id
      revisionsetId
      createdAt
      fieldName
      currentValue
      suggestedValue
      linkoutData {
        name
        diffValue {
          ... on ObjectFieldDiff {
            addedObjects {
              id
              displayName
              displayType
              entityType
            }
            removedObjects {
              id
              displayName
              displayType
              entityType
            }
            keptObjects {
              id
              displayName
              displayType
              entityType
            }
          }
          ... on ScalarField {
            value
          }
        }
      }
      revisor {
        id
        name
      }
      status
    }
    myGeneInfoDetails
  }
}
    `;

  @Injectable({
    providedIn: AppModule
  })
  export class GeneDetailGQL extends Apollo.Query<GeneDetailQuery, GeneDetailQueryVariables> {
    document = GeneDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }