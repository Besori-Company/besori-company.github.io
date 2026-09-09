(function() {
    const consentData = JSON.parse(localStorage.getItem('cookieConsent') || 'null');
    if (consentData && (Date.now() - consentData.timestamp) < 30 * 24 * 60 * 60 * 1000) return;

    // HTML
    const placeholder = document.getElementById('cookies-placeholder');
    if (!placeholder) return;

    placeholder.innerHTML = `
        <div class="cookie_banner" id="cookieBanner">
            <p class="cookie_texto">
                Usamos cookies para mejorar tu experiencia. Consulta nuestra
                <a href="/pages/terms.html">Política de Cookies</a>.
            </p>
            <div class="cookie_botones">
                <button class="cookie_btn cookie_btn_aceptar" id="cookieAcceptAll">Aceptar todas</button>
                <button class="cookie_btn cookie_btn_necesarias" id="cookieEssential">Solo necesarias</button>
            </div>
        </div>
    `;

    document.getElementById('cookieAcceptAll').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', JSON.stringify({ type: 'all', timestamp: Date.now() }));
        document.getElementById('cookieBanner').style.animation = 'cookieSlideUp 0.3s ease reverse forwards';
        setTimeout(function() { placeholder.innerHTML = ''; }, 300);
    });

    document.getElementById('cookieEssential').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', JSON.stringify({ type: 'essential', timestamp: Date.now() }));
        document.getElementById('cookieBanner').style.animation = 'cookieSlideUp 0.3s ease reverse forwards';
        setTimeout(function() { placeholder.innerHTML = ''; }, 300);
    });
})();
