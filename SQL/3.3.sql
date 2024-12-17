SELECT u.firstName, u.lastName
FROM user u
LEFT JOIN groupMembership gm ON u.id = gm.userID
LEFT JOIN groupn g ON gm.groupID = g.id
WHERE u.firstName = 'Victor'
AND (g.name NOT LIKE 'TEST-%' OR g.name IS NULL);
