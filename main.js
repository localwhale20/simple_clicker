var button = document.getElementById('clickerbutton')

var storage = window.localStorage

var clicked = 0
var clicksStyle = '🖱 Кликов: '

var saveStatsEveryClick = false
var showMessages = true

function page_onload(){
    var clicks = document.getElementById('clicks')

    clicked = storage.getItem('clicks')
    clicks.innerText = clicksStyle + clicked
}

function button_onclick(){
    var clicks = document.getElementById('clicks')

    clicked++
    clicks.innerText = clicksStyle + clicked
    if (saveStatsEveryClick == true){
        savestats()
    }
}
function page_onexit(){
    savestats()
}
function savestats_onclick(){
    var savestatsBox = document.getElementById('savestats')
    
    if (showMessages == true){
        if (savestatsBox.checked == true){
            alert('Сохранение статистики при нажатии включено ✔')
            saveStatsEveryClick = true
        }
        else if (savestatsBox.checked == false){
            alert('Сохранение статистики при нажатии выключено ❌')
            saveStatsEveryClick = false
        }
    }
}
function savestats(){
    storage.setItem('clicks', clicked)
}
function showmessages_set(){
    var showMessagesBox = document.getElementById('showmessages')

    if (showMessagesBox.checked == true){
        alert('Буду теперь тебя уведомлять 👍')
        showMessages = true
    }
    else if (showMessagesBox.checked == false){
        alert('Больше не буду уведомлять при изменениях 😊')
        showMessages = false
    }
    
}
function resetstats(){
    if (confirm('Сбросить статистику?') == true){
        storage.setItem('clicks', '0')
        alert('Готово. 😢')
        clicked = storage.getItem('clicks')
        location.reload()
    }
}