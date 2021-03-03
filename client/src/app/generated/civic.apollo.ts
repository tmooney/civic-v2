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

export type BrowseGene = {
  __typename?: 'BrowseGene';
  assertionCount: Scalars['Int'];
  description: Scalars['String'];
  diseases?: Maybe<Array<Disease>>;
  drugs?: Maybe<Array<Drug>>;
  entrezId: Scalars['Int'];
  evidenceItemCount: Scalars['Int'];
  geneAliases?: Maybe<Array<GeneAlias>>;
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

export type Gene = {
  __typename?: 'Gene';
  description: Scalars['String'];
  entrezId: Scalars['Int'];
  geneAliases?: Maybe<Array<GeneAlias>>;
  id: Scalars['Int'];
  lifecycleActions: Lifecycle;
  name: Scalars['String'];
  officialName: Scalars['String'];
  sources?: Maybe<Array<Source>>;
  variants?: Maybe<Array<Variant>>;
};

export type GeneAlias = {
  __typename?: 'GeneAlias';
  name: Scalars['String'];
};

export type GenesSort = {
  /** Available columns for sorting */
  column: GenesSortColumns;
  /** Sort direction */
  direction: SortDirection;
};

export enum GenesSortColumns {
  DiseaseName = 'diseaseName',
  DrugName = 'drugName',
  EntrezSymbol = 'entrezSymbol',
  GeneAlias = 'geneAlias'
}


export type Lifecycle = {
  __typename?: 'Lifecycle';
  lastCommentedOn?: Maybe<Event>;
  lastModified?: Maybe<Event>;
  lastReviewed?: Maybe<Event>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<AddCommentPayload>;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
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
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GenesSort>;
}>;


export type BrowseGenesQuery = (
  { __typename?: 'Query' }
  & { browseGenes: (
    { __typename?: 'BrowseGeneConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'BrowseGene' }
      & Pick<BrowseGene, 'id' | 'entrezId' | 'name' | 'variantCount' | 'evidenceItemCount' | 'assertionCount'>
      & { geneAliases?: Maybe<Array<(
        { __typename?: 'GeneAlias' }
        & Pick<GeneAlias, 'name'>
      )>>, diseases?: Maybe<Array<(
        { __typename?: 'Disease' }
        & Pick<Disease, 'name'>
      )>>, drugs?: Maybe<Array<(
        { __typename?: 'Drug' }
        & Pick<Drug, 'name'>
      )>> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
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
    & Pick<Gene, 'description' | 'entrezId' | 'id' | 'name' | 'officialName'>
    & { geneAliases?: Maybe<Array<(
      { __typename?: 'GeneAlias' }
      & Pick<GeneAlias, 'name'>
    )>>, lifecycleActions: (
      { __typename?: 'Lifecycle' }
      & { lastModified?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'id' | 'createdAt'>
      )>, lastReviewed?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'id' | 'createdAt'>
      )>, lastCommentedOn?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'id' | 'createdAt'>
      )> }
    ), sources?: Maybe<Array<(
      { __typename?: 'Source' }
      & Pick<Source, 'id' | 'citation' | 'sourceUrl' | 'sourceType'>
    )>>, variants?: Maybe<Array<(
      { __typename?: 'Variant' }
      & Pick<Variant, 'id' | 'name' | 'description'>
    )>> }
  )> }
);

export const BrowseGenesDocument = gql`
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $first: Int, $last: Int, $sortBy: GenesSort) {
  browseGenes(entrezSymbol: $entrezSymbol, drugName: $drugName, geneAlias: $geneAlias, diseaseName: $diseaseName, first: $first, last: $last, sortBy: $sortBy) {
    nodes {
      id
      entrezId
      name
      geneAliases {
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
    pageInfo {
      endCursor
      hasNextPage
    }
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
    geneAliases {
      name
    }
    id
    lifecycleActions {
      lastModified {
        id
        createdAt
      }
      lastReviewed {
        id
        createdAt
      }
      lastCommentedOn {
        id
        createdAt
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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    