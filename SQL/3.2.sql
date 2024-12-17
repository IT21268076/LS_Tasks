SELECT g.name 
FROM groupn g
LEFT JOIN groupMembership gm ON g.id = gm.groupID
WHERE g.name LIKE 'TEST-%' AND gm.groupID IS NULL;
