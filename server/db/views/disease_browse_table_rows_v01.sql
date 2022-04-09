SELECT diseases.id,
  diseases.name,
  diseases.doid,
  array_agg(DISTINCT(genes.name)) as gene_names,
  COUNT(DISTINCT(evidence_items.id)) as evidence_item_count,
  COUNT(DISTINCT(variants.id)) as variant_count,
  COUNT(DISTINCT(assertions.id)) as assertion_count
FROM diseases
INNER JOIN evidence_items on diseases.id = evidence_items.disease_id
LEFT OUTER JOIN assertions_evidence_items on assertions_evidence_items.evidence_item_id = evidence_items.id
LEFT OUTER JOIN assertions on assertions_evidence_items.assertion_id = assertions.id
INNER JOIN variants on variants.id = evidence_items.variant_id
INNER JOIN genes on genes.id = variants.gene_id
WHERE evidence_items.status != 'rejected'
GROUP BY diseases.id, diseases.name, diseases.doid
