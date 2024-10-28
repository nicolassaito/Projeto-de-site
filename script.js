function updateDateTime() {
    const now = new Date();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const dateTimeString = now.toLocaleDateString('pt-BR', options);
    document.getElementById('datetime').innerText = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();