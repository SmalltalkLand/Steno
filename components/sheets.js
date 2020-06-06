import iframe from './iframe.js'
export default {
    components: {
        'i-frame': iframe,
    },
    data: () => ({sfunck: Math.random()}),
    mounted(){
        self[this.sfunck] = {};
    },
    beforeDestroy(){
        delete self[this.sfunck]
    },
    template: `<i-frame><title>Spreadsheet</title>
    <style type="text/css">
    html,body {margin:0;padding:0;}
    table {border-collapse:collapse;}
    tr:first-child td,td:first-child {background:#ddd;}
    td {border:1px solid #888;padding:0;text-align:center;}
    td input {border:0;display:block;height:20px;padding:1px;width:80px;}
    a {border:1px solid #888;border-top:0;display:inline-block;margin:3px;padding:0 3px;text-decoration:none;}
    .formula {margin:3px;width:1337px;}
    </style>
    <body></body>
    <script src="http://cdn.jsdelivr.net/mithril/0.1.24/mithril.min.js"></script>
    <script type="text/javascript">
    var data = JSON.parse(localStorage["spreadsheet"] || "{}")
    var funcs = parent['{{sfunck}}'];
    for (var cell in data) data[cell] = computable(data[cell])
    
    function computable(value) {
        var output = new String(value)
        output.valueOf = compute.bind(this, value)
        return isNaN(+value) ? output : +value
    }
    function compute(value) {
        if (value != null && value[0] == "=") {
            try { with (data) with(funcs) return eval(value.substring(1)) } catch (e) {}
        }
        else return value
    }
    function update(cell, value) {
        data[cell] = computable(value)
        localStorage["spreadsheet"] = JSON.stringify(data)
    }
    var cell = m.prop()
    function grid(withCell) {
        for (var rows = [], i = 0; i < 27; i++) {
            for (var cols = [], j = 0; j < 17; j++) {
                var letter = String.fromCharCode("a".charCodeAt(0) + j - 1)
                cols.push(m("td", i && j ? withCell(letter + i) : i || letter))
            }
            rows.push(m("tr", cols))
        }
        return m("table", rows)
    }
    function view() {
        return [
            m("input.formula", {
                onchange: m.withAttr("value", update.bind(this, cell())),
                value: data[cell()] || ""
            }),
            grid(function(cellName) {
                var value = compute(data[cellName]) || ""
                return m("input", {
                    onkeypress: move,
                    onfocus: cell.bind(this, cellName),
                    onchange: m.withAttr("value", update.bind(this, cellName)),
                    value: value,
                    style: {textAlign: isNaN(value) || value === "" ? "left" : "right"}
                })
            })
        ]
    }
    function move(e) {
        var td = e.target.parentNode, tr = td.parentNode, table = tr.parentNode
        if (e.keyCode == 37) return highlight(tr.childNodes[Math.max(1, td.cellIndex - 1)].firstChild)
        else if (e.keyCode == 38) return highlight(table.childNodes[Math.max(1, tr.rowIndex - 1)].childNodes[td.cellIndex].firstChild)
        else if (e.keyCode == 39) return highlight(tr.childNodes[Math.min(tr.childNodes.length - 1, td.cellIndex + 1)].firstChild)
        else if (e.keyCode == 40) return highlight(table.childNodes[Math.min(table.childNodes.length - 1, tr.rowIndex + 1)].childNodes[td.cellIndex].firstChild)
        else m.redraw.strategy("none")
    }
    function highlight(cell) {
        cell.focus()
        cell.selectionEnd = cell.value.length
        return false
    }
    m.module(document.body, {controller: function() {}, view: view})
    </script></i-frame>`
}