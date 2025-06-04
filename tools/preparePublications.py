import bibtexparser
import json
from bibtexparser.bparser import BibTexParser
from bibtexparser.customization import *


def customizations(record):
    record = type(record)
    record = author(record)
    record = editor(record)
    record = journal(record)
    record = link(record)
    record = page_double_hyphen(record)
    record = doi(record)
    return record


with open("publications.bib") as bibtex_file:
    parser = BibTexParser()
    parser.customization = customizations
    bib_database = bibtexparser.load(bibtex_file, parser=parser)
    json_output = json.dumps(bib_database.entries, indent=2)
    with open("src/lib/assets/publications.json", "w") as json_file:
        json_file.write(json_output)
