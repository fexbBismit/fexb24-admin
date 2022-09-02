function slideInAlert() {
    var fadeTarget = document.getElementById("alert");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.marginTop) {
            fadeTarget.style.marginTop = '-6rem';
        }
        var mt = parseFloat(fadeTarget.style.marginTop.replace(/[^\d.-]/g, ''));
        if (mt >= -6 && mt < 0.875 ) {
            mt += 0.06875
            fadeTarget.style.marginTop = mt + 'rem';
        } else {
            clearInterval(fadeEffect);
        }
    }, 9);
}

export default slideInAlert