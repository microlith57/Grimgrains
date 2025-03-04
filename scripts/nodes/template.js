'use strict'

function TemplateNode (id, rect) {
  Node.call(this, id, rect)

  this.glyph = NODE_GLYPHS.parser

  this.cache = null

  this.receive = function (q) {
    const assoc = this.signal(q.type ? q.type.slice(0, -1) : 'page')
    const payload = assoc.answer(q)

    this.send(payload)
    this.label = `template:${assoc.id}`

    // Install Dom
    document.body.appendChild(this.signal('view').answer())

    setTimeout(() => { Ø('view').el.className = `${q.name} ready` }, 250)
  }
}
