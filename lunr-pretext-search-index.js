var ptx_lunr_search_style = "default";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colofón",
  "number": "",
  "title": "Colofón",
  "body": "  sitio personal  https:\/\/rafneta.github.io   copyright  "
},
{
  "id": "dedication-1",
  "level": "1",
  "url": "dedication-1.html",
  "type": "Dedicatoria",
  "number": "",
  "title": "Dedicatoria",
  "body": " For ...  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Agradecimentos",
  "number": "",
  "title": "Agradecimentos",
  "body": " I would like to thank...  "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Prefacio",
  "number": "",
  "title": "Prefacio",
  "body": "   About this book:  "
},
{
  "id": "preface-2",
  "level": "1",
  "url": "preface-2.html",
  "type": "Prefacio",
  "number": "",
  "title": "Not just that..",
  "body": " Not just that..  I still have more to say!  "
},
{
  "id": "sec_first-intro",
  "level": "1",
  "url": "sec_first-intro.html",
  "type": "Sección",
  "number": "1.1",
  "title": "Introduction to First Chapter",
  "body": " Introduction to First Chapter   Intro to section, because we will have subsections.  Another paragraph of the introduction.    A subsection  Content of the subsection.  More content.    Another Subsection  Text with some math: only for some values of .    After the last subsection, you might have a conclusion.   "
},
{
  "id": "sec_first-examples",
  "level": "1",
  "url": "sec_first-examples.html",
  "type": "Sección",
  "number": "1.2",
  "title": "Examples",
  "body": " Examples  Here is an example:    The statement of the example, since it will have a solution. What is the solution?    This is the solution.    Here is another example, but without a solution   This is an example of an example without a solution (or hint or answer) so the paragraph doesn't need to be inside a statement tag.   Although the next things are not examples, they give examples of blocks that are not examples. First a theorem.   Theorem Title   This is the statement of the theorem.    And this is its proof.      A corollary that doesn't need a proof.    Perhaps at the end of the section, you want to add a note to the reader about how what you have fits into the larger scope of mathematics.   Larger Context  Comment to the reader here.   Of course, if you want more information, you might see .  "
},
{
  "id": "ex_first",
  "level": "1",
  "url": "ex_first.html",
  "type": "Ejercicios",
  "number": "1.3",
  "title": "My Exercises",
  "body": "  My Exercises   Is this an exercise?   Yes.   It is, but not a very good one.    Another, with a hint.   The hint.      "
},
{
  "id": "ch_empty",
  "level": "1",
  "url": "ch_empty.html",
  "type": "Capítulo",
  "number": "2",
  "title": "(No title)",
  "body": " (No title)   Try adding your own content here!   "
},
{
  "id": "sec_features-blocks",
  "level": "1",
  "url": "sec_features-blocks.html",
  "type": "Sección",
  "number": "3.1",
  "title": "Environments and Blocks",
  "body": " Environments and Blocks  Some text   My Theorem   Theorem statement.    Proof of theorem.      Statement of example    The solution.    Now a figure.   A frog   A nice-looking frog with a longish description.    "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Apéndice",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "solutions-2",
  "level": "1",
  "url": "solutions-2.html",
  "type": "Apéndice",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "appendix-1",
  "level": "1",
  "url": "appendix-1.html",
  "type": "Apéndice",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Índice alfabético",
  "number": "",
  "title": "Índice analítico",
  "body": " Índice analítico   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colofón",
  "number": "",
  "title": "Colofón",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
