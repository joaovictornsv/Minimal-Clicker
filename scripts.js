var quant = document.getElementById('quant')
var contador = document.getElementById('cont')
var psec = document.getElementById('psec')
var button_1clique = document.getElementById('botao_1clique')
var valor_compra_1clique = Number(button_1clique.value.slice(4, -9))
var total_txt = document.getElementById('total_cookies')
var button_upgrade = document.getElementById('upgrade')
var lv = 1
var prox_upgrade = 2

function upgrade() {
    var img = document.getElementById('foto')
    img.src = `images/cookie_lv${prox_upgrade}.png`
    switch (prox_upgrade){
        case 2 :
            lv = 2
            document.getElementById('nome_cookie').innerText = 'Cookie de Chocolate'
            break
        case 3 :
            lv = 3
            document.getElementById('nome_cookie').innerText = 'Cookie de Côco'
            button_upgrade.value = 'Max'
            break
    }
    prox_upgrade++
    if (Number(total_txt.innerText) < 50 && lv == 2) {
        button_upgrade.disabled = true
        button_upgrade.style.backgroundColor = 'rgb(194, 194, 194)'
        button_upgrade.style.cursor = 'default'
    }
    if (lv == 3) {
        button_upgrade.disabled = true
        button_upgrade.style.backgroundColor = 'rgb(194, 194, 194)'
        button_upgrade.style.cursor = 'default'
    }
}


function clicar() {
    var qtd_cookies = Number(quant.innerText)
    var cookies_click = Number(contador.innerText)
    var total_num = Number(total_txt.innerText)
    quant.innerText = `${qtd_cookies + cookies_click}`
    total_txt.innerText = `${total_num + cookies_click}`
    if (Number(quant.innerText) >= valor_compra_1clique) {
        document.getElementById('botao_1clique').disabled = false
    }
    if (total_num >= 9 && lv == 1 || total_num >= 49 && lv == 2) {
        button_upgrade.disabled = false
        button_upgrade.style.backgroundColor = 'gold'
        button_upgrade.style.cursor = 'pointer'
    }
    add(event, cookies_click)
}


function add(evt, num) {
    var div = document.getElementById('corpo')
    var um = document.createElement('span')
    var x = evt.clientX - 12
    var y = evt.clientY - 12
    um.getAttribute('id')
    um.id = 'add'
    um.innerText = `+ ${String(num)}`
    um.style.left = x + 'px'
    um.style.top = y + 'px'
    div.appendChild(um)
    setTimeout (function() {
        um.remove()
    }, 1000)
}

function comprar_1clique() {
    var qtd_cookies = Number(quant.innerText)
    var cookies_click = Number(contador.innerText)
    quant.innerText = qtd_cookies - parseInt(valor_compra_1clique)
    contador.innerText = cookies_click + 1
    valor_compra_1clique += (valor_compra_1clique * 0.1)
    button_1clique.value = `+1 (${parseInt(valor_compra_1clique)} cookies)`
    if (Number(quant.innerText) < valor_compra_1clique) {
        document.getElementById('botao_1clique').disabled = true
    }
}