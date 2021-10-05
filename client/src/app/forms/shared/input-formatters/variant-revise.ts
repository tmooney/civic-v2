import {
  ClinvarInput,
  Coordinate,
  CoordinateInput,
  Maybe,
  NullableReferenceBuildTypeInput,
  ReferenceBuild,
} from '@app/generated/civic.apollo';

export function toClinvarInput(
  ids?: string[],
): ClinvarInput {
  let na, nf;
  if (ids && ids.includes('N/A')) {
    ids = undefined;
    nf = undefined;
    na = true;
  } else if (!ids) {
    ids = undefined;
    na = undefined;
    nf = true;
  } 

  return <ClinvarInput>{
    ids: ids ? ids.map(id => +id) : undefined,
    noneFound: nf,
    notApplicable: na
  };
}

export function toCoordinateInput(coord: Coordinate): CoordinateInput {
  return <CoordinateInput>{
    chromosome: undefinedIfEmpty(coord.chromosome),
    representativeTranscript: undefinedIfEmpty(coord.representativeTranscript),
    start: coord.start ? +coord.start: undefined,
    stop: coord.stop ? +coord.stop: undefined,
  };
}

export function toNullableReferenceBuildInput(
  build: Maybe<ReferenceBuild>
): NullableReferenceBuildTypeInput {
  let nRefBuild: NullableReferenceBuildTypeInput = { value: undefined, unset: undefined};
  if(build) { nRefBuild.value = build }
  else { nRefBuild.unset = true }
  return nRefBuild;
}

export function undefinedIfEmpty(inVal: Maybe<string>) : Maybe<string> {
  let outVal: Maybe<string>
  if(inVal && inVal.length > 0) {
    outVal = inVal
  } else {
    outVal = undefined
  }
  return outVal;
}