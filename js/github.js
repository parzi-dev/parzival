// GitHub modülü
const githubModule = (function() {
    // Özel değişkenler
    const githubUsername = 'parzivalhaliday';
    const monthLetters = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Modül başlatma
    function init() {
        initGitHubCalendar();
        setStarsCount();
        return this;
    }
    
    // GitHub Calendar'ı başlat
    function initGitHubCalendar() {
        const calendarContainer = document.getElementById('github-calendar');
        if (!calendarContainer) return;
        
        // Statik bir calendar göster
        calendarContainer.innerHTML = createStaticCalendar();
    }
    
    // Statik bir calendar HTML'i oluştur
    function createStaticCalendar() {
        // Son 12 ay için 2 satır, her satırda 6 ay
        let html = '<div class="static-calendar">';
        const currentDate = new Date();
        
        // 2 satır oluştur
        for (let row = 0; row < 2; row++) {
            html += '<div class="calendar-row">';
            
            // Her satırda 6 ay
            for (let i = 0; i < 6; i++) {
                // Ay hesaplama: İlk satır son 6 ay, ikinci satır ondan önceki 6 ay
                const monthOffset = i + (row * 6);
                const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - monthOffset, 1);
                const monthIndex = monthDate.getMonth();
                const year = monthDate.getFullYear().toString().substr(-2); // Son iki basamak (23, 24 vb.)
                
                // Rastgele seviye (0-4)
                const level = Math.floor(Math.random() * 5);
                
                // Ay için toplam contribution sayısı (seviyeye göre)
                const totalContributions = level === 0 ? 0 : level * Math.floor(Math.random() * 20) + 1;
                
                // Tooltip metni - daha kısa versiyonu
                const tooltipText = totalContributions === 0 
                    ? `0 in ${monthNames[monthIndex]}'${year}` 
                    : `${totalContributions} in ${monthNames[monthIndex]}'${year}`;
                
                // Ay kutucuğu - Sadece ay harfi (J, F, M, ...)
                html += `<div class="calendar-month level-${level}" data-month="${monthNames[monthIndex]}" data-tooltip="${tooltipText}">
                    <span class="month-initial">${monthLetters[monthIndex]}</span>
                </div>`;
            }
            
            html += '</div>';
        }
        
        html += '</div>';
        return html;
    }
    
    // Yıldız sayısını statik olarak ayarla
    function setStarsCount() {
        const starsElement = document.getElementById('stars-count');
        if (starsElement) {
            starsElement.textContent = '12';
        }
    }

    // Public API
    return {
        init: init
    };
})(); 

