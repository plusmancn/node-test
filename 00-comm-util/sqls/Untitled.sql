-- select * from Person where PersonId in (
-- SELECT 
--     PersonId
-- FROM
--     leetcode.Person
-- group by Email);

SELECT 
    PersonId, Email
FROM
    Person
GROUP BY Email
having count(*) > 1


