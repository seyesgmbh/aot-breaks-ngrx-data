import {EntityMetadataMap} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Todo: {},
};

export const pluralNames = {
  // Case matters. Match the case of the entity name.
  Todo: 'todos'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
