SELECT u.firstName, u.lastName, g.name AS groupName, u.created AS userCreated, g.created AS groupCreated
FROM user u
JOIN groupMembership gm ON u.id = gm.userID
JOIN groupn g ON gm.groupID = g.id
WHERE u.created < g.created;
