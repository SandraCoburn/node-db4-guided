# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## Project: Bug Tracker

`Admin` can assign a `ticket` to an `employee` with priority
Employee sees the ticket (notified by email)

## A good data model (opinion)

- captures all the data needed by the system
- captures only the data needed by thesystem
- reflects reality 9from the poin of veiw of the system)
- its flexible 9(can evolve with the needs of the ystem)
- guarantee data integrity (without sacrificing too much performance)
- is driven by the way we access the data

## components

- entitties (resources): nouns -- > tables
- properties (column, fields, atributes) --> columns
- relationships --> foreign keys

## Workflow

- identify entitties (resources): nouns -- > tables
- identify properties (column, fields, atributes) --> columns
- identify relationships --> foreign keys

## Relationships

- on to one: rare
- one to many: most common type
- many to many: smoke and mirrors, a trick!

## Mantras

- Every table must have a Primary ke (PK)
- work on two or three entities at a time
- onde to many relationship requires a `foreign key`
- the FK goes on the `MANY`side of the relationsnip
- many to many requires a `third table`
- the third table can have other columns
